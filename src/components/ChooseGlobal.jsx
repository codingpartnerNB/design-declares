import { X } from 'lucide-react';
import React from 'react';

const ChooseGlobal = () => {
  const chapters = ["UNITED KINGDOM", "IRELAND", "BRASIL", "AUSTRALIA"];

  return (
    <div className="min-h-screen py-6 px-6 md:px-10 pb-48">
        <div className='mx-auto mb-14 flex justify-between items-center'>
            <div className="text-6xl font-bold mb-8">D!</div>
            <button
                onClick={() => window.history.back()}
              className="text-3xl h-full items-center justify-center cursor-pointer w-12"
            >
              <X size={28} />
            </button>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left side title */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Select Global Chapter:</h2>
        </div>

        {/* Right side list */}
        <div className="lg:col-span-2 space-y-4">
            {chapters.map((chapter, index) => (
                <div
                key={index}
                className="text-4xl md:text-6xl font-extrabold text-gray-100 transition"
                >
                    <span className='hover:text-[#FF5630] cursor-pointer'>
                        {chapter}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseGlobal;