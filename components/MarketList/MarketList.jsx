'use client';
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Link from "next/link";
import Image from "next/image";

const MarketList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${currentPage}&price_change_percentage=24h`;
  const totalPages = 5;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [currentPage]);

  return (
    <section className="max-w-[1024px] mx-auto h-[100vh]">
      <div className="w-full">
        <h1 className="text-4xl">Market</h1>
        <div className="flex justify-center p-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} href="#" />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? 'active bg-white text-black' : ''}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)} href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="flex flex-col items-start">
          {data.map((item) => {
            let className = "text-gray-100";
            if (item.price_change_percentage_24h > 0) {
              className = "text-green-600";
            } else if (item.price_change_percentage_24h < 0) {
              className = "text-red-600";
            }

            return (
              <Link
                href={`/coin/${item.id}`}
                key={item.id}
                className="flex p-2 w-full justify-between items-center mb-4 hover:bg-purple-700 hover:bg-opacity-10"
              >
                <div className="flex items-center lg:flex-1">
                  <Image
                    className="sm:mr-5 xs:mr-3 xs:w-[32px] sm:w-auto"
                    src={item.image}
                    alt={item.symbol}
                    width={48}
                    height={48}
                  />
                  <p className="sm:text-base xs:text-sm sm:mr-0 xs:mr-2">
                    {item.name}{" "}
                    <span className="sm:inline xs:hidden sm:ml-[6px] lg:mr-0 xs:mr-2">
                      ({item.symbol.toUpperCase()})
                    </span>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="sm:text-base xs:text-sm">{item.current_price}$</p>
                </div>
                <div>
                  <p className={`${className} sm:text-lg xs:text-sm`}>
                    {item.price_change_percentage_24h > 0 ? "+" : ""}
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketList;