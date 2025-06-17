import React from 'react';

const DonateToD = () => {
  return (
    <section className="px-4 md:px-10 pb-[30rem] md:pb-64">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left: Title */}
        <div className='pb-2 mb-6 w-max lg:sticky lg:top-4 lg:self-start lg:z-10'>
          <h2 className="text-2xl md:text-[1.6rem] font-semibold py-2">Donate to D!</h2>
        </div>

        {/* Right: Text + Buttons */}
        <div className="space-y-6 overflow-y-auto lg:col-span-2">
          <p className="para-style mt-2">
            Design Declares is a CIC and would not exist without our dedicated team of co-steers,
            volunteers, and our passionate community working towards change in the creative industry.
            Your support can go a long way, and helps us too continue the valuable work needed in
            tackling the climate crises. If you believe in the work we do, please consider a small
            donation to help us on our journey for a more equitable and just planet.
          </p>

          <div className="flex flex-wrap gap-2 mt-12">
            <button className="button-style">
              Donate £10
            </button>
            <button className="button-style">
              Donate £20
            </button>
            <button className="button-style">
              Donate £50
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateToD;