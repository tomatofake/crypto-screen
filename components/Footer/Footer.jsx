import Image from 'next/image'
import blur from '../../public/footer-blur.png'

const Footer = () => {
  return (
    <footer className='px-10 relative overflow-y-hidden'>
      <section className='border-t opacity-55 py-8 flex justify-between items-center'>
        <div className='sm:text-sm xs:text-xs text-white text-opacity-50 sm:w-auto xs:w-1/2'>
          <p>CryptoScreen Limited registered in England & Wales</p>
          <p className='sm:block xs:hidden'>Company number 104822483</p>
        </div>
        <div className='sm:text-sm xs:text-xs text-white text-opacity-50'>
          <p>Copyright © CryptoScreen</p>
          <p>All Rights Reserved</p>
        </div>
      </section>
      <div>
        <Image src={blur} alt='blur' className='absolute sm:-left-[290px] xs:-left-[0px] sm:-top-[110px] xs:-top-[50px] -z-40' />
      </div>
    </footer>
  )
}

export default Footer