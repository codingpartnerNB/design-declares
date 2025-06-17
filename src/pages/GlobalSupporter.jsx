import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { globalSupporters } from "../footerData.js";

// Improved column splitting that handles long lists better
function distributeSupporters(supporters, numCols) {
  const columns = Array(numCols).fill().map(() => []);
  
  // First distribute countries evenly
  supporters.forEach((country, i) => {
    columns[i % numCols].push(country);
  });

  // Then balance supporters within each column
  return columns.map(column => {
    return column.map(country => {
      if (!country.supporters) return country;
      
      // Split supporters into chunks if too long
      const maxSupportersPerChunk = 15;
      if (country.supporters.length > maxSupportersPerChunk) {
        const chunks = [];
        for (let i = 0; i < country.supporters.length; i += maxSupportersPerChunk) {
          chunks.push({
            ...country,
            supporters: country.supporters.slice(i, i + maxSupportersPerChunk)
          });
        }
        return chunks;
      }
      return country;
    }).flat(); // Flatten in case we split into chunks
  });
}

const NUM_COLS = 9;

const GlobalSupporters = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  const [count, setCount] = useState(1);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (isInView && !animationStarted) {
      setAnimationStarted(true);

      const target = 663;
      const duration = 2000;
      const startTime = performance.now();

      const animateCounter = (currentTime) => {
        const elapsedTime = Math.max(currentTime - startTime, 0);
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(1 + progress * (target - 1));

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      };

      requestAnimationFrame(animateCounter);
    }
  }, [isInView, animationStarted]);

  // Process data for better column distribution
  const columns = distributeSupporters(globalSupporters, NUM_COLS);

  return (
    <motion.div 
      ref={containerRef}
      className="w-full px-4 md:px-8 py-8"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-[4rem] font-medium text-white">#{count}</h1>
        </motion.div>
        
        <motion.div 
          className='space-y-0'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="mb-10 text-2xl text-white">
            <span>Global Supporters</span>
          </div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 gap-x-6 gap-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {col.map((countryObj, idx) => (
                  <motion.div 
                    key={`${countryObj?.country || 'unknown'}-${idx}`}
                    className="text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      delay: 0.1 * colIdx + 0.05 * idx, 
                      duration: 0.6 
                    }}
                  >
                    <div className="font-bold text-[12px] mb-1">
                      {countryObj?.country || "Unknown Country"}
                    </div>
                    <div className="text-[12px] leading-relaxed space-y-1">
                      {Array.isArray(countryObj?.supporters) ? (
                        countryObj.supporters.map((supporter, i) => (
                          <div key={i} className="hover:underline cursor-pointer">
                            {supporter}
                          </div>
                        ))
                      ) : (
                        <div>No supporters listed</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GlobalSupporters;