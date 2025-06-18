import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const DesignAndPartnerships = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return (
    <section ref={containerRef} className="py-6 px-6 md:px-10 pb-48">
      <div className="mx-auto space-y-24">
        <div className="text-6xl font-bold mb-8">D!</div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3">
          <div className="md:sticky md:top-8 h-fit mb-6">
            <h2 className="text-2xl font-bold">About Design Declares</h2>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-12">
                Climate breakdown has begun. <br />
                And business as usual is not an option.
              </h1>

              <p className="para-style font-semibold mb-4">
                That’s why we started Design Declares.
              </p>
              <p className="para-style mb-12">
                Inspired by a global declaration movement sounding the alarm in
                industries everywhere, we’re an industry-recognised initiative
                representing the fears, hopes and commitment to action of a
                growing group of designers, design studios, agencies and
                institutions.
              </p>

              <div>
                <button className="button-style">See Global Declarations</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <p className="para-style text-lg md:text-xl">
                Together, we sit at the very beginning of the creative process.
                The tools we use and the choices we make can influence society’s
                behaviour, change economies and challenge everything that’s come
                before.
              </p>
              <div className="space-y-4">
                <p className="para-style text-lg md:text-xl">
                  Because design, whether it’s a product, a piece of packaging
                  or an exhibition space, has impact. It’s up to us whether that
                  impact is harmful or healing.
                </p>
                <p className="para-style text-lg md:text-xl">
                  We’re glad you’re here. Let’s get to work.
                </p>
              </div>
            </div>

            <div>
              <button className="button-style">Declare Emergency Now</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300 pl-4">
              <ul className="list-disc space-y-2 text-lg">
                <li>Design Declares is free.</li>
                <li>
                  'Design' to us means industrial, digital, graphic,
                  communication and service design.
                </li>
                <li>
                  Design Declares offers support to all its signatories through
                  shared best practice, resources and insights, all found in the
                  Toolkit.
                </li>
                <li>
                  Our signatories use the clarity of the 8 Acts of Emergency as a
                  way to start meaningful conversations and actions in
                  collaboration with colleagues, collaborators and clients.
                </li>
              </ul>
              <ul className="list-disc space-y-2 text-lg sm:pl-4">
                <li>
                  We welcome declarations from companies with an office and/or
                  employing at least one full-time designer, and from practising
                  freelance designers who are registered as self-employed in the
                  UK. All signatories will be named and published on this site.
                </li>
                <li>
                  As a collective voice, we will liaise with other industry
                  organisations and networks, constructively engaging with
                  government, clients and design media.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignAndPartnerships;
