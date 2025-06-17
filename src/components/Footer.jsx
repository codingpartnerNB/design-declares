import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Logo */}
        <div className="tracking-none">
          <h3 className="text-5xl lg:text-6xl font-bold leading-none">DESIGN</h3>
          <h3 className="text-5xl lg:text-6xl font-bold leading-none">DECLARES</h3>
        </div>

        {/* Right Newsletter */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
          <div className="inline w-full sm:w-fit mb-10 md:mb-0">
            <div className="space-y-1 grid grid-cols-2 sm:flex sm:flex-col">
              <a href="#" className="text-lg cursor-pointer hover:underline">Contact</a>
              <a href="#" className="text-lg cursor-pointer hover:underline">Instagram</a>
              <a href="#" className="text-lg cursor-pointer hover:underline">LinkedIn</a>
              <a href="#" className="text-lg cursor-pointer hover:underline">Privacy Policy</a>
            </div>
          </div>

          
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-3">Sign up to the D! Newsletter</h2>
            {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="subscribeEmail" className="label-style text-black">Email:*</label>
                <input 
                  type="email" 
                  id="subscribeEmail"
                  className="input-style pl-3 md:pl-[5.3rem] border-black" 
                  required 
                />
              </div>

            <div className="flex flex-col md:flex-row">
              <div>
                <label className="flex items-center gap-3 mb-4">
                  <input 
                    type="checkbox" 
                    id='subscribeFooter' 
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-black flex items-center justify-center">
                    <div className="h-full w-full text-black text-[2rem] text-center hidden checkbox-checked">
                      &times;
                    </div>
                  </div>

                  <span className="checkbox-label text-[12px] text-medium text-black">I would like to be added to the Design Declares! newsletter and receive further updates.</span>
                </label>
                
                <a href="#" className="text-[12px] underline hover:text-[#eee] block mb-4">
                  View our Privacy Policy
                </a>
              </div>

              <button className="bg-[#eee] hover:bg-black hover:text-[#f1f4f8] px-6 py-3 rounded-full text-lg font-semibold w-full md:w-[200px] md:h-[50px] cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
          {/* Bottom Note */}
            <div className="mt-10 text-[12px] md:col-span-2">
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
        </div>

      </div>

    </footer>
  );
};

export default Footer;
