import Image from 'next/image'
import blur from '../../public/blur.png'

const About = () => {
  return (
    <section className='py-10 xs:px-10'>
      <div>
        <div className='relative hero:block sm:flex sm:justify-center'>
          <div className='xl:w-auto'>
            <Image src={blur} alt='blur' />
          </div>
          <div 
            className='absolute top-[40%] transform 2xl:translate-x-[65%] 
            xl:-translate-y-1/2 md:text-left hero:translate-x-[65%] 
            md:translate-x-[0] sm:translate-x-[0] sm:text-center sm:top-[35%]
            xs:text-center xs:-translate-y-[35%]'>
            <h2 className='text-3xl mb-4 hero:text-left sm:text-center'>What is CryptoScreen?</h2>
            <p className='xl:text-lg hero:max-w-[650px] xl:max-w-[600px] sm:max-w-[550px] hero:text-left sm:text-center'>CryptoScreen is an innovative platform designed for cryptocurrency enthusiasts and traders, offering real-time tracking of cryptocurrency prices and market capitalizations. With CryptoScreen, users can effortlessly monitor market trends, analyze price fluctuations, and make informed decisions. <span className='sm:block xs:hidden'>The service also provides powerful tools for calculating trading positions, helping users optimize their strategies and manage risks effectively.</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About