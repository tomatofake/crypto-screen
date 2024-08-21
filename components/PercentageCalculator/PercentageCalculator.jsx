import { useState } from "react"

const PercentageCalculator = () => {
  const [percentage, setPercentage] = useState('');
  const [value, setValue] = useState('');
  const coefficient = percentage / 100;
  const result = value * coefficient;

  return (
    <div>
      <div>
        <h2 className="text-2xl lg:mb-10 xs:mb-2">Percentage calculator</h2>
      </div>
      <div className="flex xs:flex-wrap items-center">
        <div className="flex items-center">
          <p className="mb-3 mr-2">What is</p>
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2 mr-2" 
          />
          <p className="mb-3 mr-2">% <span className="sm:inline xs:hidden">(Percentage)</span></p>
        </div>
        <div className="flex items-center">
          <p className="mr-2 mb-3">of</p>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2" 
          />
        </div>
        
      </div>
      <div>
        <p>{`Result: ${percentage} Percentage(%) of ${value} is ${result.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export default PercentageCalculator