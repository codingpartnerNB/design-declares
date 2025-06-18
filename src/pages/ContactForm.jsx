import React, { useState, useRef } from 'react';
import { useInView, motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    enquiry: '',
    message: '',
    newsletter: false,
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };


  return (
    <section ref={containerRef} onSubmit={handleSubmit} className="py-6 px-6 md:px-10 pb-48">
      <div className="mx-auto space-y-24">
        <div className="text-6xl font-bold mb-8">D!</div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3">
          <div className="md:sticky md:top-8 h-fit mb-6">
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <motion.form 
                className='space-y-8 border border-gray-300 p-4 md:p-12'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                >
                <h1 className="text-2xl md:text-[3.5rem] font-normal mb-8">Send Us A Message</h1>
                {/* Form Fields */}
                <div className="mb-8">
                    <div className='relative'>
                        <label htmlFor='messageusername' className="label-style">Name:*</label>
                        <input 
                            type="text" 
                            id="messageusername"
                            name="messageusername"
                            value={formData.messageusername}
                            onChange={handleChange}
                            className="input-style border-b-0 pl-3 md:pl-[5.6rem]" 
                            required 
                        />
                    </div>
                    <div className='relative'>
                        <label htmlFor="messageemail" className="label-style">Email:*</label>
                        <input 
                            type="email" 
                            id="messageemail"
                            name="messageemail"
                            value={formData.messageemail}
                            onChange={handleChange}
                            className="input-style border-b-0 pl-3 md:pl-[5.3rem]" 
                            required 
                        />
                    </div>
                    
                    <div className='relative'>
                    <label htmlFor="teamtocontact" className="label-style">Team to contact:*</label>
                    <select id="teamtocontact" name="teamtocontact" value={formData.teamtocontact} onChange={handleChange} className="appearance-none w-full p-3 pl-[5.8rem] md:pl-[10.6rem] text-[18px] md:text-xl border border-gray-300 border-b-0 focus:outline-none bg-black">
                        <option value=""></option>
                        <option>D! UK</option>
                        <option>D! Ireland</option>
                        <option>D! Brasil</option>
                        <option>D! Australia</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    </div>
                    
                    <div className='relative'>
                    <label htmlFor="enquirytype" className="label-style">Enquiry type:*</label>
                    <select id="enquirytype" name="enquirytype" value={formData.enquirytype} onChange={handleChange} className="appearance-none w-full p-3 pl-[6.8rem] md:pl-[10.6rem] text-[18px] md:text-xl border border-gray-300 border-b-0 focus:outline-none bg-black">
                        <option value=""></option>
                        <option>Contribute to the toolkit</option>
                        <option>Volunteer my time</option>
                        <option>Set up a new chapter</option>
                        <option>Discuss something else</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    </div>
                    
                    <div>
                    <textarea 
                        rows={6}
                        id="messagedescription" 
                        name="messagedescription" 
                        value={formData.messagedescription}
                        onChange={handleChange}
                        placeholder="Please write your message here."
                        className="placeholder-gray-300 w-full p-3 border text-[18px] md:text-xl border-gray-300 focus:outline-none" 
                    />
                    </div>
                </div>

                {/* Consent Section */}
                <div className="space-y-4 mb-8">
                    <label className="flex items-start md:items-center gap-3">
                        <input 
                          type="checkbox" 
                          id='consentMessage' 
                          name='consentMessage' 
                          checked={formData.consentMessage}
                          onChange={handleChange}
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
                        Send Message
                    </button>
                </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
