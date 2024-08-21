import Link from "next/link"

const DesktopNav = () => {
  return (
    <nav className='text-lg transition-all'>
      <Link 
       className='nav-link mr-10 m-2' 
       href='/'>
        Home
      </Link>
      <Link 
       className='nav-link mr-10 m-2' 
       href='/calculator'>
        Calculator
      </Link>
      <Link 
       className='nav-link mr-10 m-2' 
       href='/market'>
        Market
      </Link>
      <Link 
       className='nav-link m-2' 
       href='/about'>
      About Us
      </Link>
    </nav> 
  )
}

export default DesktopNav