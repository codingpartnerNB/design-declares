import React from 'react';

const DeclareEmergency = () => {
  return (
    <section className="px-4 md:px-10 pb-[30rem] md:pb-64">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Sidebar Title */}
        <div className="pb-2 mb-6 w-max lg:sticky lg:top-4 lg:self-start lg:z-10">
          <h2 className="text-[1.6rem] font-semibold py-2">Declare Emergency Now</h2>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-2">
          {/* Description in second column */}
          <p className="para-style mb-8 mt-2">
            Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
          </p>
          {/* Form below description */}
          <form className='space-y-8 border border-gray-300 p-4 md:p-12'>
            <h1 className="text-2xl md:text-[3.5rem] font-normal mb-8">I am Declaring Emergency</h1>
            <div className="mb-8 text-[18px] md:text-xl">
              <div className="flex flex-wrap gap-4 mb-6">
                <label className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="declarationType" 
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-white flex items-center justify-center">
                    <div className="h-full w-full text-white text-[2rem] text-center hidden radio-checked">
                      &times;
                    </div>
                  </div>

                  <span className="radio-label text-gray-300">As a business</span>
                </label>
                <label className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="declarationType" 
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-white flex items-center justify-center">
                    <div className="h-full w-full text-white text-[2rem] text-center hidden radio-checked">
                      &times;
                    </div>
                  </div>

                  <span className="radio-label text-gray-300">As an individual</span>
                </label>
                <label className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="declarationType" 
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-white flex items-center justify-center">
                    <div className="h-full w-full text-white text-[2rem] text-center hidden radio-checked">
                      &times;
                    </div>
                  </div>

                  <span className="radio-label text-gray-300">As a public institution</span>
                </label>
                <label className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="declarationType" 
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-white flex items-center justify-center">
                    <div className="h-full w-full text-white text-[2rem] text-center hidden radio-checked">
                      &times;
                    </div>
                  </div>

                  <span className="radio-label text-gray-300">As a team or department</span>
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="mb-8">
              <div className='relative'>
                <label htmlFor='businessName' className="label-style">Business Name:*</label>
                <input 
                  type="text" 
                  id="businessName"
                  className="input-style border-b-0 pl-3 md:pl-[10.6rem]" 
                  required 
                />
              </div>
              
              <div className='relative'>
                <label htmlFor="website" className="label-style">Website:*</label>
                <input 
                  type="url" 
                  id="website"
                  className="input-style border-b-0 pl-3 md:pl-[6.8rem]" 
                  required 
                />
              </div>
              
              <div className='relative'>
                <label htmlFor="country" className="label-style">Country:*</label>
                <select id="country" className="appearance-none w-full p-3 pl-[5.8rem] md:pl-[10.6rem] text-[18px] md:text-xl border border-gray-300 border-b-0 focus:outline-none bg-black">
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>France</option>
                  <option>Georgia</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className='relative'>
                <label htmlFor="discipline" className="label-style">Discipline:*</label>
                <select id="discipline" className="appearance-none w-full p-3 pl-[6.8rem] md:pl-[10.6rem] text-[18px] md:text-xl border border-gray-300 border-b-0 focus:outline-none bg-black">
                  <option value="">Select your discipline</option>
                  <option>Industrial Design</option>
                  <option>Digital Design</option>
                  <option>Graphic Design</option>
                  <option>Communication Design</option>
                  <option>Service Design</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className='relative'>
                <label htmlFor="email" className="label-style">Email:*</label>
                <input 
                  type="email" 
                  id="email"
                  className="input-style border-b-0 pl-3 md:pl-[5.3rem]" 
                  required 
                />
              </div>
              
              <div>
                <textarea 
                  rows={6}
                  id="description" 
                  placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                  className="placeholder-gray-300 w-full p-3 border text-[18px] md:text-xl border-gray-300 focus:outline-none" 
                />
              </div>
            </div>

            {/* Consent Section */}
            <div className="space-y-4 mb-8">
              <label className="flex items-start md:items-center gap-3 w-full">
                  <input 
                    type="checkbox" 
                    id="consentDataUse"
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-white flex items-center justify-center">
                    <div className="h-full w-full text-white text-[2rem] text-center hidden checkbox-checked">
                      &times;
                    </div>
                  </div>

                  <span className="checkbox-label text-[12px] text-medium text-gray-300">I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.</span>
                </label>

                <label className="flex items-start md:items-center gap-3">
                  <input 
                    type="checkbox" 
                    id='consentNewsletter' 
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-white flex items-center justify-center">
                    <div className="h-full w-full text-white text-[2rem] text-center hidden checkbox-checked">
                      &times;
                    </div>
                  </div>

                  <span className="checkbox-label text-[12px] text-medium text-gray-300">I would like to be added to the Design Declares! newsletter and receive further updates.</span>
                </label>
              
              
              <a href="#" className="inline-block text-[12px] text-medium text-gray-300 hover:text-[#FF5630] underline mt-2">
                View our Privacy Policy
              </a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="button-style"
            >
              Declare Emergency Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DeclareEmergency;
