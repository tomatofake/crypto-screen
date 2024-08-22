'use client';
import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-white text-2xl">
        <FaBars />
      </SheetTrigger>
      <SheetContent className="bg-black flex justify-center items-center">
        <nav className="flex flex-col items-center">
          <SheetClose asChild>
            <Link className="py-5 text-xl" href="/">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="py-5 text-xl" href="/calculator">
              Calculator
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="py-5 text-xl" href="/market">
              Market
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="py-5 text-xl" href="/about">
              About Us
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;



