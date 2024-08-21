'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

const MarketList = () => {

  const [currentPage, setCurrentPage] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${currentPage}&price_change_percentage=24h`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`p-2 flex items-center justify-center bg-white text-black rounded-full sm:w-[32px] xs:w-[26px] xs:h-[26px]  sm:h-[32px] sm:text-lg ${i !== 5 ? 'mr-10' : ''}`}
      >
        {i}
      </button>
    );
  }
  
  return (
    <section className="max-w-[1024px] mx-auto h-[100vh]"> 
      <div className="w-full">
        <h1 className="text-4xl">Market</h1>
        <div className="flex justify-center p-5">
          {paginationButtons}
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
              <Link href={`/coin/${item.id}`} key={item.id} className="flex p-2 w-full justify-between items-center mb-4 hover:bg-purple-700 hover:bg-opacity-10">
                <div className="flex items-center lg:flex-1">
                  <Image className="sm:mr-5 xs:mr-3 xs:w-[32px] sm:w-auto" src={item.image} alt={item.symbol} width={48} height={48} />
                  <p className="sm:text-base xs:text-sm sm:mr-0 xs:mr-2">{item.name} <span className="sm:inline xs:hidden sm:ml-[6px] lg:mr-0 xs:mr-2">({item.symbol.toUpperCase()})</span></p>
                </div>
                <div className="flex-1">
                  <p className="sm:text-base xs:text-sm">{item.current_price}$</p>
                </div>
                <div>
                  <p className={`${className} sm:text-lg xs:text-sm`}>
                    {item.price_change_percentage_24h > 0 ? '+' : ''}{item.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </Link> 
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MarketList;