import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { signatories } from '../footerData.js';

const Signatories = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  const grouped = [];
  const columnSize = Math.ceil(signatories.length / 9);
  const [count, setCount] = useState(1); // Start at 1 to avoid negative or zero
  const [animationStarted, setAnimationStarted] = useState(false);

  for (let i = 0; i < 9; i++) {
    grouped.push(signatories.slice(i * columnSize, (i + 1) * columnSize));
  }

  useEffect(() => {
    if (isInView && !animationStarted) {
      setAnimationStarted(true);

      const target = 514;
      const duration = 2000; // 2 seconds for smooth animation
      const startTime = performance.now();

      const animateCounter = (currentTime) => {
        const elapsedTime = Math.max(currentTime - startTime, 0); // Prevent negative elapsed time
        const progress = Math.min(elapsedTime / duration, 1); // Normalize progress (0 to 1)
        const currentCount = Math.floor(1 + progress * (target - 1)); // Start from 1, scale to 514

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCounter); // Continue until complete
        }
      };

      requestAnimationFrame(animateCounter);
    }
  }, [isInView, animationStarted]);

  return (
    <motion.div 
      ref={containerRef}
      className="px-4 md:px-10 pb-8"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-[4rem] font-medium">#{count}</h2>
        </motion.div>
        
        <motion.div 
          className='space-y-0'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-10 text-2xl">
            <span>Signatories and counting in</span>
            <span className="bg-[#FF5630] text-black px-3 py-1 text-[12px] font-medium rounded-full">D! UK</span>
          </div>

          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {grouped.map((column, i) => (
              <div key={i} className="space-y-0 text-[12px] leading-relaxed">
                {column.map((name, j) => (
                  <motion.div 
                    key={j} 
                    className='cursor-pointer hover:underline'
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * i + 0.1 * (j/column.length), duration: 0.6 }}
                  >
                    {name}
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

export default Signatories;