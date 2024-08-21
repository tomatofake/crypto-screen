'use client';
import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-white text-2xl">
        <FaBars />
      </SheetTrigger>
      <SheetContent className='bg-black flex justify-center items-center'>
        <nav className="flex flex-col items-center">
          <Link 
           className='py-5 text-xl' 
           href='/'>
            Home
          </Link>
          <Link 
           className='py-5 text-xl'  
           href='/calculator'>
            Calculator
          </Link>
          <Link 
           className='py-5 text-xl'  
           href='/market'>
            Market
          </Link>
          <Link 
           className='py-5 text-xl'  
           href='/about'>
          About Us
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav



