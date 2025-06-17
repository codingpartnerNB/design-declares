import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f25e3a] text-black px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Logo */}
        <div>
          <h1 className="text-6xl font-bold leading-none">DESIGN</h1>
          <h1 className="text-6xl font-bold leading-none">DECLARES</h1>
        </div>

        {/* Middle Links */}
        <div className="space-y-4">
          <p className="text-lg">Contact</p>
          <p className="text-lg">Instagram</p>
          <p className="text-lg">LinkedIn</p>
          <p className="text-lg">Privacy Policy</p>
        </div>

        {/* Right Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Sign up to the D! Newsletter</h2>
          <input
            type="email"
            placeholder="Email:*"
            className="w-full border border-black px-4 py-3 mb-4"
          />

          <div className="flex items-start mb-2">
            <input type="checkbox" className="w-6 h-6 border border-black mr-3" />
            <span className="text-sm">
              I would like to be added to the Design Declares! newsletter and receive further updates.
            </span>
          </div>

          <a href="#" className="text-sm underline block mb-4">
            View our Privacy Policy
          </a>

          <button className="bg-white px-6 py-3 rounded-full text-lg font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-sm md:text-base">
        <p>
          This website has been built following low-carbon principles of web development and hosted using serverless
          computing, by only allocating energy when needed and on demand.{' '}
          <a href="#" className="underline">
            Learn more about our carbon footprint.
          </a>
        </p>
        <p className="mt-4">
          Empowered by{' '}
          <a href="#" className="underline">
            Drifttime®
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
