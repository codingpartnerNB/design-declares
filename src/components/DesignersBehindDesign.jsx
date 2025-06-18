import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DesignersBehindDesign = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

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
            <h2 className="text-2xl font-bold">
              The Designers Behind Design Declares UK
            </h2>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <p className="para-style text-lg md:text-xl">
              Inspired by the global emergency declaration movement demanding
              accountability and action across industries, Design Declares is
              the initiative of a multidisciplinary group of design
              professionals and agencies who all believe in the power of design
              to change things.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 items-center justify-center space-y-16">
              <img
                src="design-for-life.svg"
                alt="Design for Life"
                className="max-h-9 object-cover cursor-pointer"
              />
              <img
                src="driftime.svg"
                alt="Driftime"
                className="max-h-10 object-cover cursor-pointer"
              />
              <img
                src="morrama.svg"
                alt="Morrama"
                className="max-h-8 object-cover cursor-pointer"
              />
              <img
                src="studio-wood.svg"
                alt="Studiowood"
                className="max-h-7 object-cover cursor-pointer"
              />
              <img
                src="thomas-matthews.svg"
                alt="Thomas Matthews"
                className="max-h-13 object-cover cursor-pointer"
              />
              <img
                src="urge.svg"
                alt="URGE"
                className="max-h-14 object-cover cursor-pointer mb-16"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DesignersBehindDesign;
