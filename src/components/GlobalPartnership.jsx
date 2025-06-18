import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const GlobalPartnership = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return (
    <section ref={containerRef} className="py-12 px-6 md:px-10 pb-48">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className='mx-auto space-y-24'
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="md:sticky md:top-8 h-fit mb-6">
            <h2 className="text-2xl font-bold">Global Partnerships</h2>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <p className="para-style mb-12">
              We invite our colleagues from across the design industry to join
              us in declaring an emergency, and starting to take urgent action.*
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <p className="para-style text-lg md:text-xl">
                The acts of emergency above are the first (big) steps. As we all
                commit to this work, we must also commit to doing it in a way that
                is genuinely inclusive and equitable.
              </p>
              <p className="para-style text-lg md:text-xl">
                *We are actively seeking partnerships to expand Design Declares
                around the world. If that sounds like something you’re interested
                in, please get in touch.
              </p>
              <p className="para-style text-lg md:text-xl">
                It doesn’t matter where on the journey you are. What matters is
                that you’re here, and you’re ready to do the work. Because there
                is no design on a dead planet.
              </p>
              <p className="para-style text-lg md:text-xl">
                <p className='mb-4'>Join our list of global partners...</p>
                <a href="#" className="underline hover:text-[#FF5630]">UK</a>,{" "}
                <a href="#" className="underline hover:text-[#FF5630]">Ireland</a>,{" "}
                <a href="#" className="underline hover:text-[#FF5630]">Brazil</a>,{" "}
                <a href="#" className="underline hover:text-[#FF5630]">Australia</a>
              </p>
            </div>
            <button className="button-style mt-8">Get in Touch</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalPartnership;
