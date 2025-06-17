import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DesignDeclares = () => {
  const [showD, setShowD] = useState(false);
  const [showExclamation, setShowExclamation] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowD(true), 200);      // Show D
    const timer2 = setTimeout(() => setShowD(false), 1000);    // Hide D after 0.8s
    const timer3 = setTimeout(() => setShowExclamation(true), 1100); // Show !
    const timer4 = setTimeout(() => setShowExclamation(false), 1900); // Hide ! after 0.8s
    const timer5 = setTimeout(() => setShowMainContent(true), 2200); // Show main content

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between px-6 py-6 md:px-8 relative h-screen">

      {/* D Animation */}
      <AnimatePresence>
        {showD && (
          <motion.span
            className="absolute left-10 top-10 z-50 text-[3rem] md:text-[5rem] xl:text-[8rem] text-style font-extrabold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            D
          </motion.span>
        )}
      </AnimatePresence>

      {/* ! Animation */}
      <AnimatePresence>
        {showExclamation && (
          <motion.span
            className="absolute left-36 top-10 z-50 text-[3rem] md:text-[5rem] xl:text-[8rem] text-style font-extrabold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            !
          </motion.span>
        )}
      </AnimatePresence>

      {/* Left: Heading */}
      {showMainContent && (
        <div className='flex flex-col lg:flex-row justify-between w-full'>
          <motion.h1
            className="text-[3rem] md:text-[5rem] xl:text-[8rem] font-extrabold tracking-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {['Design', 'Declares', 'UK'].map((word, index) => (
              <motion.div
                key={word}
                className="relative block overflow-hidden"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 * index }}
              >
                <span className={`relative z-10 text-style ${word === 'UK' ? 'text-[#FF5630]' : 'text-[#E4E4E4]'}`}>
                  {word}
                </span>
                <motion.span
                  className="absolute inset-0 h-full w-full bg-black origin-top"
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  transition={{
                    delay: 0.3 * index,
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            ))}
          </motion.h1>

          {/* Right: Paragraph */}
          <motion.div
            className="w-full md:max-w-lg mt-10 md:mt-8 text-md sm:text-xl text-gray-300 text-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
          </motion.div>
        </div>
      )}

    </section>
  );
};

export default DesignDeclares;
