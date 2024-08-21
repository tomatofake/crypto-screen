'use client';
import Link from 'next/link'
import DesktopNav from '../DesktopNav/DesktopNav'
import MobileNav from '../MobileNav/MobileNav'
import { useEffect, useState } from 'react';

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <header className='fixed top-0  w-full z-10 '>
      <div className='flex justify-between items-center px-10 py-5'>
        <div className='flex items-center'>
          <Link href='/' className='text-2xl'>
            CryptoScreen
          </Link>
        </div>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </header>
  )
}

export default Header