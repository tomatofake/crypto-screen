import Image from "next/image"
import topology from '../../public/topology.png'
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";

const MarketSection = () => {
  return (
    <section className="sm:py-10 xs:py-12 px-10 flex justify-end ">
      <div>
        <div className="flex items-center">
          <div className="mr-4">
            <h2 className="sm:text-3xl xs:text-xl mb-3">Use our platform to screen the market</h2>
            <div>
              <button className="flex items-center">
                <Link className="nav-link mr-2 text-lg" href='/market'>Watch market</Link>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="sm:block xs:hidden">
            <Image src={topology} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketSection