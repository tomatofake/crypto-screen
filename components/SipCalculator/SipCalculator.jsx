'use client'
import { useState } from "react"

const SipCalculator = () => {
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [returns, setReturns] = useState('');
  const [increase, setIncrease] = useState('');

  const totalMonths = time * 12;

  let investedAmount = 0;
  let futureValue = 0;
  let currentAmount = Number(amount);

  for (let i = 0; i < totalMonths; i++) {
    futureValue += currentAmount * Math.pow(1 + Number(returns) / 100 / 12, totalMonths - i);
    investedAmount += currentAmount;
    if ((i + 1) % 12 === 0) {
      currentAmount += currentAmount * (Number(increase) / 100);
    }
  }
  
  return (
    <div>
      <div>
        <h2 className="text-2xl sm:mb-10 xs:mb-2">SIP <span className="sm:inline xs:hidden">(Systematic Investment Plan)</span> calculator</h2>
      </div>
      <div>
        <p className="mb-3">Monthly Investment Amount</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2 sm:w-[350px]" 
        />
      </div>
      <div>
        <p className="mb-3">Investment Period in years</p>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2 sm:w-[350px]" 
        />
      </div>
      <div>
        <p className="mb-3">Expected Annual Returns (%)</p>
        <input
          type="number"
          value={returns}
          onChange={(e) => setReturns(e.target.value)}
          class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2 sm:w-[350px]"  
        />
      </div>
      <div>
        <p className="mb-3"><span className="sm:block xs:hidden">Step up - </span>Yearly Increase in <span className="sm:inline xs:hidden">Monthly</span> Investment (%)</p>
        <input
          type="number"
          value={increase}
          onChange={(e) => setIncrease(e.target.value)}
          class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2 sm:w-[350px]"  
        />
      </div>
      <div>
        <p>{`Expected Amount: $${futureValue.toFixed(2)}`}</p>
        <p>{`Amount Invested: $${investedAmount.toFixed(2)}`}</p>
        <p>{`Total Gain: $${(futureValue - investedAmount).toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export default SipCalculator