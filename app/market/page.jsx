import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MarketList from "@/components/MarketList/MarketList"

const Market = () => {
  return (
    <>
      <main 
        className="h-[100vh] 
        2xl:mt-[5%] 2xl:mb-0 2xl:h-[calc(100vh_+_155px)]
        xs:h-[100vh]
        lg:mt-[10%] lg:mb-[20%] 
        sm:mt-[15%] sm:mb-[20%]
        xs:mt-[20%] xs:mb-[5%]
          px-10">
        <MarketList />
      </main>
    </>
  )
}

export default Market