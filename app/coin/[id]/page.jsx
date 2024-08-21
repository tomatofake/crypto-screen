'use client';
import BackButton from "@/components/BackButton/BackButton";
import Image from "next/image";
import { useEffect, useState } from "react";

const CoinPage = ({ params }) => {
  const { id } = params; 
  const [data, setData] = useState(null); 

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, [id]);

  console.log(data);
  
  if (!data) return <p>Loading...</p>;

    let className = "text-gray-100"; 
    if (data.market_data.price_change_percentage_24h > 0) {
      className = "text-green-600"; 
    } else if (data.market_data.price_change_percentage_24h < 0) {
      className = "text-red-600";
    }

  return (
    <>
      <main className="2xl:py-20 2xl:mt-auto 2xl:mb-auto lg:mt-[15%] lg:mb-[15%] sm:mt-[20%] sm:mb-[20%] xs:mt-[30%] xs:mb-[30%] h-screen flex justify-center">
        <section className="2xl:max-w-[960px] 2xl:px-0 xs:px-10 xs:w-full box-border">
          <div className="mb-4 text-lg">
            <BackButton />
          </div>
          <div className="flex sm:flex-row xs:flex-col sm:items-center justify-between mb-4">
            <div className="flex items-center xs:mb-3 sm:mb-0">
              {data.image ? <Image className="mr-4" src={data.image.large} width={64} height={64} alt={data.id} /> : null}
              <h1 className="text-3xl">{data.name}</h1>
            </div>
            <div>
              <p className="text-xl">Market capitalization rank - #{data.market_cap_rank}</p>
            </div>
          </div>
          <div 
            className="text-white 2xl:text-lg prose-max-w-none prose-a:text-purple-700 w-[100%] mb-4 max-h-[70vh] overflow-y-scroll"
            dangerouslySetInnerHTML={{ __html: data.description?.en || "No description available." }}
          />
          <div className="flex items-center justify-between">
          <p className="text-xl">Current Price: {data.market_data?.current_price?.usd}$</p>
          <p className={`${className} text-xl`}>24h change: {data.market_data ? data.market_data.price_change_percentage_24h.toFixed(2) + "%" : ""}</p>
          </div>
        </section>
      </main>
    </>
    
  );
};

export default CoinPage;
