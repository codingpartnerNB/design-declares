import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    title: 'The Role of Design',
    content: [
      "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
      "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It's not quite magic, but it feels like it.",
    ],
  },
  {
    title: 'Time for Change',
    content: [
      'Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.',
      'It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.',
      'This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.',
      "And it means acting systemically - seeing the bigger picture and working with others to sharpen design's incredible capacity to influence and accelerate climate repair and justice.",
    ],
  },
  {
    title: 'Act with Urgency',
    content: [
      'We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.',
      'This is the most important brief of our lives. Join us as we begin to design a climate-positive future.',
    ],
  },
];

const BreakDown = () => {
  const [open, setOpen] = useState(sections.map(() => false));
  const containerRef = useRef(null);
  const animationPlayed = useRef(false);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Trigger animation when scrolling down
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !animationPlayed.current) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: 'easeOut' }
        });
        animationPlayed.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  // Set initial state
  React.useEffect(() => {
    controls.set({ y: 100, opacity: 0 });
  }, [controls]);

  const toggleSection = (idx) => {
    setOpen((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <section
      ref={containerRef}
      className="px-4 md:px-10 py-[30rem] md:py-64 relative"
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3"
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
      >
        {/* Left Sticky Section */}
        <div className="pb-2 mb-6 w-max lg:sticky lg:top-4 lg:self-start lg:z-10">
          <h2 className="text-2xl md:text-[1.6rem] font-semibold py-2">
            This is Breakdown
          </h2>
        </div>

        {/* Right Scrollable Content */}
        <div className="space-y-6 overflow-y-auto lg:col-span-2">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-normal leading-none mb-10 mt-2">
            The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
          </h2>

          {/* Accordion Sections */}
          <div className="space-y-4 text-gray-300">
            {sections.map((section, index) => (
              <div key={index} className='py-2'>
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full text-left border-t-1 border-gray-300 pt-4 pb-2 text-2xl font-medium cursor-pointer"
                >
                  {section.title}
                  {open[index] ? <ChevronUp size={25} /> : <ChevronDown size={25} />}
                </button>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    open[index] ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  {section.content.map((text, i) => (
                    <p key={i} className="text-lg mb-4">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Video Button */}
          <div className="mt-10">
            <button className="button-style">
              View our D! Intro Video
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BreakDown;