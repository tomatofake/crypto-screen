import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CryptoScreen",
  description: "Your personal crypto-tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      
        <body className={inter.className}>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  );
}
