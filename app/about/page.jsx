import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Image from "next/image";
import about from '../../public/about.png'

const About = () => {
  return (
    <>
      <Header />
      <main className="2xl:h-[calc(100vh - 300px)] xs:h-[100vh] py-10 flex mx-10">
        <section className="flex justify-between items-center my-10">
          <div className="2xl:max-w-[768px] lg:max-w-[612px]">
            <h1 className="sm:text-4xl xs:text-3xl mb-4">
              Who we are?
            </h1>
            <p className="sm:text-lg">
            CryptoScreen is a comprehensive platform tailored for cryptocurrency enthusiasts, traders, and investors who seek to stay ahead in the dynamic world of digital currencies. Our platform is built on the foundation of providing real-time insights and data-driven tools that empower users to make informed decisions in the ever-evolving cryptocurrency market.
            At the core of CryptoScreen is our advanced tracking system, which delivers up-to-the-minute information on cryptocurrency prices and market capitalizations. This feature allows users to keep a pulse on market movements, helping them identify emerging trends and respond swiftly to price fluctuations. Whether you're tracking the performance of Bitcoin, Ethereum, or any other altcoin, CryptoScreen ensures you have the most accurate and current data at your fingertips.
            </p>
          </div>
          <div className="xs:hidden lg:block">
            <Image className="object-none" src={about} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About