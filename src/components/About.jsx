import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-16 md:py-20 relative flex flex-col md:flex-row gap-10">
      
      {/* Left Column (Logo + About Text) */}
      <div className="md:w-1/4 flex flex-col items-start">
        <div className="text-4xl font-bold mb-6">D!</div>
        <p className="mt-auto font-medium text-sm text-white">About Design Declares</p>
      </div>

      {/* Right Column (Main Content) */}
      <div className="md:w-3/4 space-y-6">
        <h1 className="text-3xl md:text-4xl font-light">
          Climate breakdown has begun.<br />
          And business as usual is not an option.
        </h1>

        <p className="font-semibold">That’s why we started Design Declares.</p>

        <p className="text-gray-300 text-sm md:text-base max-w-3xl">
          Inspired by a global declaration movement sounding the alarm in industries everywhere,
          we’re an industry-recognised initiative representing the fears, hopes and commitment to action of a growing group of designers, design studios, agencies and institutions.
        </p>

        <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition">
          See Global Declarations
        </button>

        <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-300">
          <p className="max-w-sm">
            Together, we sit at the very beginning of the creative process. The tools we use and the choices we make can influence society’s behaviour,
            change economies and challenge everything that’s come before.
          </p>
          <p className="max-w-sm">
            Because design, whether it’s a product, a piece of packaging or an exhibition space, has impact.
            It’s up to us whether that impact is harmful or healing.
            <br /><br />
            We’re glad you’re here. Let’s get to work.
          </p>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition">
          Declare Emergency Now
        </button>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300 list-disc list-inside">
          <ul className="space-y-2">
            <li>Design Declares is free.</li>
            <li>‘Design’ to us means industrial, digital, graphic, communication and service design.</li>
            <li>Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.</li>
            <li>Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.</li>
          </ul>
          <ul className="space-y-2">
            <li>We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.</li>
            <li>As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.</li>
          </ul>
        </div>
      </div>

      {/* Fixed Bottom Right Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-1 z-50">
        <button
          onClick={() => alert("Menu clicked")}
          className="bg-white text-black px-4 py-2 text-sm font-medium border border-black hover:bg-gray-200 transition"
        >
          Menu
        </button>
        <button
          onClick={() => alert("Declare Now clicked")}
          className="bg-white text-black px-4 py-2 text-sm font-medium border border-black hover:bg-gray-200 transition"
        >
          Declare Now
        </button>
      </div>
    </div>
  );
};

export default About;
