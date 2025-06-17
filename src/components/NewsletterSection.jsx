import React from 'react';
import NewsletterImg from "../assets/newsletter-image.webp";

const NewsletterSection = () => {
  return (
    <section className="px-4 md:px-10 pb-[30rem] md:pb-64">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3">
        
        {/* Left Title */}
        <div className='mb-8 lg:sticky lg:top-4 lg:self-start lg:z-10'>
          <h2 className="text-2xl md:text-[1.6rem] font-semibold py-2">
            The Design Declares Newsletter and Toolkit
          </h2>
        </div>

        {/* Right Content */}
        <div className='overflow-y-auto lg:col-span-2'>
            <div className='space-y-6 flex flex-col mt-2'>
                <img src={NewsletterImg} alt="The Design Declares Newsletter and Toolkit" className='w-full h-full' />

                <p className="para-style">
                    Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
                </p>

                <p className="mb-10 text-[18px]">
                    Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit – just register below.
                </p>

                {/* Email Field */}
                <div className='relative mb-8'>
                    <label htmlFor="userEmail" className="label-style">Email:*</label>
                    <input 
                    type="email" 
                    id="userEmail"
                    className="input-style pl-3 md:pl-[5.3rem]" 
                    required 
                    />
                </div>

                {/* Checkbox */}
                <label className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id='subscribeNewsletter' 
                    className="absolute opacity-0 h-5 w-5"
                  />
                  
                  <div className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] border border-white flex items-center justify-center">
                    <div className="h-full w-full text-white text-[2rem] text-center hidden checkbox-checked">
                      &times;
                    </div>
                  </div>

                  <span className="checkbox-label text-[12px] text-medium text-gray-300">I would like to be added to the Design Declares! newsletter and receive further updates.</span>
                </label>

                {/* Privacy Policy */}
                <a href="#" className="inline-block text-[12px] text-medium text-gray-300 hover:text-[#FF5630] underline mt-2">
                    View our Privacy Policy
                </a>

                {/* Subscribe Button */}
                <div className="mt-4">
                    <button className="button-style">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;