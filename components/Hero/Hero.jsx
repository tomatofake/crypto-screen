import hero2 from '../../public/hero.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative text-4xl pl-10 flex justify-center hero:justify-between max-w-[1920px] sm:h-[100vh] xs:h-[80vh] hero:pr-0 sm:pr-10 xs:pr-10'>
      <div className='3xl:max-w-[920px] 2xl:max-w-[670px] xl:max-w-[450px] static flex items-center hero:absolute hero:top-1/2 hero:transform hero:-translate-y-1/2'>
        <h2 className='hero:text-left 3xl:text-[72px] 3xl:leading-[72px] 2xl:text-[58px] 2xl:leading-[58px] sm:text-center sm:text-[50px] xs:max-w-[full] xs:text-center'>
          Monitor cryptocurrency, market conditions, price fluctuations and follow trends
        </h2>
      </div>
      <Image
       className='object-none absolute right-0 top-0 h-full hero:block hidden' 
       src={hero2} 
       alt='eth-img' 
      />
    </section>
  )
}

export default Hero