// Component implementation
import React, { useState, useEffect } from "react";
import { globalSupporters } from "../footerData.js";

// Helper: Split array into N columns, filling each column in order
function splitIntoColumns(arr, numCols) {
  const cols = Array.from({ length: numCols }, () => []);
  arr.forEach((item, idx) => {
    cols[idx % numCols].push(item);
  });
  return cols;
}

const NUM_COLS = 9;

const GlobalSupporters = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const target = 663;
    const duration = 1000;
    const increment = target / (duration / 16);
    
    let current = 1;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const columns = splitIntoColumns(globalSupporters, NUM_COLS);

  return (
    <div className="w-full px-8 py-8">
      <div className="mx-auto">
        <div>
          <h1 className="text-3xl md:text-[4rem] font-medium">#{count}</h1>
        </div>
        <div className='space-y-0'>
          <div className="mb-10 text-2xl">
            <span>Global Supporters</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-9 gap-x-8 gap-y-0">
            {columns.map((col, colIdx) => (
              <div key={colIdx}>
                {col.map((countryObj, idx) => (
                  <div key={countryObj.country + idx} className="mb-4">
                    <div className="font-bold text-[12px] mb-1">{countryObj.country}</div>
                    <div className="text-[12px] text-gray-200">
                      {countryObj.supporters.map((s, i) => (
                        <div key={i}>{s}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
};

export default GlobalSupporters;