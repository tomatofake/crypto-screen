import { useState } from "react";

const StockCalculator = () => {

  const [firstUnits, setFirstUnits] = useState('');
  const [firstPrice, setFirstPrice] = useState('');
  const [secondUnits, setSecondUnits] = useState('');
  const [secondPrice, setSecondPrice] = useState('');
  const [thirdUnits, setThirdUnits] = useState('');
  const [thirdPrice, setThirdPrice] = useState('');

  const totalUnits = Number(firstUnits) + Number(secondUnits) + Number(thirdUnits);

  const averagePrice = totalUnits > 0
    ? (Number(firstUnits) * Number(firstPrice) +
      Number(secondUnits) * Number(secondPrice) +
      Number(thirdUnits) * Number(thirdPrice)) /  totalUnits : 0; 

  return (
    <div>
      <div>
        <h2 className="text-2xl sm:mb-10 xs:mb-2">Stock market average calculator</h2>
      </div>
      <div className="flex mb-4 xs:flex-wrap">
        <div className="sm:mr-10 xs:mr-2">
          <h2 className="sm:text-xl xs:text-lg mb-4">First Purchase</h2>
          <div>
            <p className="mb-3">Units</p>
            <input
              type="number"
              value={firstUnits}
              onChange={(e) => setFirstUnits(e.target.value)}
              class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2" 
            />
          </div>
          <div>
            <p className="mb-3">Price per share</p>
            <input
              type="number"
              value={firstPrice}
              onChange={(e) => setFirstPrice(e.target.value)}
              class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2" 
            />
          </div>
        </div>
        <div className="sm:mr-10 xs:mr-0">
          <h2 className="sm:text-xl xs:text-lg mb-4">Second Purchase</h2>
          <div>
            <p className="mb-3">Units</p>
            <input
              type="number"
              onChange={(e) => setSecondUnits(e.target.value)}
              class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2" 
            />
          </div>
          <div>
            <p className="mb-3">Price per share</p>
            <input
              type="number"
              onChange={(e) => setSecondPrice(e.target.value)}
              class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2" 
            />
          </div>
        </div>
        <div className="sm:block xs:hidden">
          <h2 className="text-xl mb-4">Third Purchase</h2>
          <div>
            <p className="mb-3">Units</p>
            <input
              type="number"
              onChange={(e) => setThirdUnits(e.target.value)}
              class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2" 
            />
          </div>
          <div>
            <p className="mb-3">Price per share</p>
            <input
              type="number"
              onChange={(e) => setThirdPrice(e.target.value)}
              class="text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-2" 
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="mb-2">{`Total units: ${totalUnits}`}</p>
        <p>{`Average price: ${averagePrice.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export default StockCalculator