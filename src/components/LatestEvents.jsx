import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const events = [
  {
    date: '24.04.2025, 03 PM:30',
    title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
    description: 'Recap: SD4P Collective working session – 28th March 2025',
    link: '#',
  },
  {
    date: '06.12.2024, 02 PM:30',
    title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
    description: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
    link: '#',
  },
];

const LatestEvents = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return (
    <section 
      ref={containerRef}
      className="px-4 md:px-10 pb-[30rem] md:pb-56"
    >
      <motion.div
        className='mx-auto grid grid-cols-1 lg:grid-cols-3'
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Left Sticky Title - unchanged */}
        <div className='mb-8 pt-10 lg:sticky lg:top-4 lg:self-start lg:z-10'>
          <h2 className="text-2xl md:text-[1.6rem] font-semibold">Latest</h2>
        </div>

        {/* Right Content - with staggered animations */}
        <div className="space-y-6 overflow-y-auto lg:col-span-2">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="grid gap-4 md:grid-cols-2 md:items-start md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              {/* Left Side - unchanged */}
              <div className="flex flex-col gap-2 pt-0 md:pt-10">
                <div className="flex items-center gap-2 text-sm text-[#C4C4C4] font-semibold">
                  <span className="bg-[#272727] px-3 py-1 rounded-full">Events</span>
                  <span className="bg-[#272727] px-3 py-1 rounded-full">D! UK</span>
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold max-w-xl leading-snug">
                  {event.title}
                </h3>
              </div>

              {/* Right Side - unchanged */}
              <div className="text-lg max-w-sm pt-2 md:pt-20 pb-10 md:pb-0">
                <p className="mb-2">{event.description}</p>
                <a
                  href={event.link}
                  className="underline hover:text-[#FF5630] transition"
                >
                  Read story
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <button className="button-style">
              See all the latest
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LatestEvents;