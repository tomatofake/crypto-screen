'use client';
import PercentageCalculator from "@/components/PercentageCalculator/PercentageCalculator";
import SipCalculator from "@/components/SipCalculator/SipCalculator";
import StockCalculator from "@/components/StockCalculator/StockCalculator";
import { useState } from "react";

const Calculator = () => {
  
  const [active, setActive] = useState('stockAverage');
  let activeClassName = 'bg-white text-black rounded-lg';
  const setCacl = (calculatorName) => {
    setActive(calculatorName);
  };

  return (
    <>
      <main className="h-screen flex items-center px-10 sm:mt-auto sm:mb-auto">
        <section className="flex calc:flex-row xs:flex-col calc:justify-between w-full xs:items-start items-center">
          <div className="mb-10">
            <div>
              <h1 className="text-4xl lg:mb-10 xs:mb-5">Calculator</h1>
            </div>
            <div className="text-lg">
              <div
               onClick={() => setCacl('stockAverage')}
               className={`${active === 'stockAverage' ? activeClassName : ''} py-1 px-2 mb-4 cursor-pointer`}
              >
                <h2>
                  Stock Average Calculator
                </h2>
              </div>
              <div
               onClick={() => setCacl('percentage')}
               className={`${active === 'percentage' ? activeClassName : ''} py-1 px-2 mb-4 cursor-pointer`}
              >
                <h2>
                  Percentage calculator
                </h2>
              </div>
              <div
               onClick={() => setCacl('sip')}
               className={`${active === 'sip' ? activeClassName : ''} py-1 px-2 cursor-pointer`}
              >
                <h2>
                  SIP calculator
                </h2>
              </div>
            </div>
          </div>
          <div>
            {active === 'stockAverage' ? (
              <StockCalculator />
            ) : null}
            {active === 'percentage' ? (
              <PercentageCalculator />
            ) : null}
            {active === 'sip' ? (
              <SipCalculator />
              ) : null}
            
          </div>
        </section>
      </main>
    </>
  )
}

export default Calculator