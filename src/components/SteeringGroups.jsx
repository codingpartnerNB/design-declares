import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const steeringMembers = [
  {
    name: "Abb‑d Taiyo",
    title: "Driftime®",
    img: "abb-d-taiyo.jpg",
  },
  {
    name: "Alexie Sommer",
    title: "URGE Collective",
    img: "alexie-sommer.jpg",
  },
  {
    name: "Aurelie Lionet",
    title: "Design for Life",
    img: "aurelie-lionet.jpg",
  },
  {
    name: "Jo Barnard",
    title: "Morrama",
    img: "jo-barnard.jpg",
  },
];

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SteeringGroup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="py-12 px-6 md:px-10 pb-48" ref={ref}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto space-y-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="md:sticky md:top-8 h-fit mb-6 mr-0 md:mr-18">
            <h2 className="text-2xl font-bold">Steering Group</h2>
          </div>

          <div className="lg:col-span-2 space-y-8 lg:space-y-0">
            {/* Mobile Carousel */}
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto lg:hidden px-2">
              {steeringMembers.map((m, i) => (
                <div
                  key={i}
                  className="snap-center flex-shrink-0 w-[70vw] sm:w-[50vw] md:w-1/2 lg:w-auto"
                >
                  <MemberCard {...m} />
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
              {steeringMembers.map((m, i) => (
                <MemberCard key={i} {...m} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const MemberCard = ({ name, title, img }) => (
  <figure className="flex flex-col space-y-4">
    <div className="relative w-full aspect-[3/4] overflow-hidden contrast-110 grayscale">
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
    <figcaption className="space-y-1">
      <p className="text-lg font-medium">{name}</p>
      <p className="text-sm text-gray-300">{title}</p>
    </figcaption>
  </figure>
);


export default SteeringGroup;
