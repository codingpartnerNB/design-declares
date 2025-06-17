import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    enquiry: '',
    message: '',
    newsletter: false,
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
    alert('Message sent!');
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-20 md:py-16 relative">
      
      {/* Logo */}
      <div className="text-3xl font-bold mb-10">D!</div>

      {/* Form Container */}
      <div className="border border-gray-700 p-6 md:p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl mb-6 font-light">Send Us A Message</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name:*"
            className="w-full bg-black text-white border border-gray-600 px-4 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email:*"
            className="w-full bg-black text-white border border-gray-600 px-4 py-2"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="team"
            className="w-full bg-black text-white border border-gray-600 px-4 py-2"
            value={formData.team}
            onChange={handleChange}
            required
          >
            <option value="">Team to contact:*</option>
            <option value="support">Support</option>
            <option value="media">Media</option>
            <option value="partner">Partnership</option>
          </select>

          <select
            name="enquiry"
            className="w-full bg-black text-white border border-gray-600 px-4 py-2"
            value={formData.enquiry}
            onChange={handleChange}
            required
          >
            <option value="">Enquiry type:*</option>
            <option value="general">General</option>
            <option value="feedback">Feedback</option>
            <option value="urgent">Urgent</option>
          </select>

          <textarea
            name="message"
            placeholder="Please write your message here."
            className="w-full bg-black text-white border border-gray-600 px-4 py-2 min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="accent-white"
            />
            <label className="text-sm text-gray-400">
              I would like to be added to the Design Declares! newsletter and receive further updates.
            </label>
          </div>

          <a href="#" className="text-sm underline text-gray-400 block mb-4">
            View our Privacy Policy
          </a>

          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Fixed Bottom Buttons */}
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

export default ContactForm;
