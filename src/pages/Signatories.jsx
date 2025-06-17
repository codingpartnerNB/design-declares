import React, {useState, useEffect} from 'react';
import {signatories} from '../footerData.js';

const Signatories = () => {
  const grouped = [];
  const columnSize = Math.ceil(signatories.length / 9);
  const [count, setCount] = useState(1);

  for (let i = 0; i < 9; i++) {
    grouped.push(signatories.slice(i * columnSize, (i + 1) * columnSize));
  }

  useEffect(() => {
    const target = 514;
    const duration = 1000; // 1 second total duration
    const increment = target / (duration / 16); // Roughly 60fps
    
    let current = 1;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 md:px-10 pb-[30rem] md:pb-64">
      <div className="mx-auto">
        <div>
          <h2 className="text-3xl md:text-[4rem] font-medium">#{count}</h2>
        </div>
        <div className='space-y-0'>
          <div className="flex items-center gap-3 mb-10 text-2xl">
            <span>Signatories and counting in</span>
            <span className="bg-[#FF5630] text-black px-3 py-1 text-[12px] font-medium rounded-full">D! UK</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6">
            {grouped.map((column, i) => (
              <div key={i} className="space-y-0 text-[12px] leading-relaxed">
                {column.map((name, j) => (
                  <div key={j} className='cursor-pointer hover:underline'>{name}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signatories;
