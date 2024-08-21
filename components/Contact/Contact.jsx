import Link from "next/link";
import { GrContact } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {

  return (
    <section className="sm:py-10 xs:py-11 px-10 xs:px-10">
      <div className="flex">
        <div className="md:mr-[280px] sm:mr-[100px] xs:mr-[50px]">
          <h2 className="md:text-lg md:max-w-[600px] mb-4 sm:text-base xs:text-sm">
            If you have any questions or need assistance with using CryptoScreen, please don't hesitate to reach out to us. <span className="sm:block xs:hidden">We're here to help and ensure you have the best possible experience with our platform.</span>  Feel free to contact us at any time!
          </h2>
          <div className="flex items-center bg-violet-900 w-[145px] py-2 px-4">
            <button className="mr-3">
              Contact Us
            </button>
            <GrContact />
          </div>
        </div>
        <div className="flex flex-col">
          <Link className="flex items-center mb-3" href='https://github.com/tomatofake?tab=projects'>
            <FaGithub className="sm:text-[32px] xs:text-[24px] sm:mr-5 xs:mr-2"/><span className='nav-link'>GitHub</span>
          </Link>
          <Link className="flex items-center mb-3" href='https://web.telegram.org/a/'>
            <FaTelegram className="sm:text-[32px] xs:text-[24px] sm:mr-5 xs:mr-2"/><span className='nav-link'>Telegram</span>
          </Link>
          <Link className="flex items-center mb-3" href='https://discord.com/'>
            <FaDiscord className="sm:text-[32px] xs:text-[24px] sm:mr-5 xs:mr-2"/><span className='nav-link'>Discord</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact