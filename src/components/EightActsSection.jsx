import React from "react";

const acts = [
  {
    title: "Sound the Alarm",
    desc: "Acknowledge and raise awareness of the climate and ecological crisis – including its roots in systems of oppression – in our organisations and our practice.",
  },
  {
    title: "Start the Journey",
    desc: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    title: "Bring Clients with Us",
    desc: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
  },
  {
    title: "Measure What We Make",
    desc: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
  },
  {
    title: "Redefine ‘Good’",
    desc: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
  },
  {
    title: "Educate, Accelerate",
    desc: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
  },
  {
    title: "Design for Justice",
    desc: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
  },
  {
    title: "Amplify Voices for Change",
    desc: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
  },
];

const EightActsSection = () => {
  return (
    <section className="px-4 md:px-10 pb-[30rem] md:pb-64">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Sidebar Title */}
        <div>
          <div className="pb-2 mb-6 w-max lg:sticky lg:top-4 lg:self-start lg:z-10">
            <h2 className="text-[1.6rem] font-semibold py-2">8 Acts of Emergency</h2>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="overflow-y-auto lg:col-span-2">
          <p className="para-style mt-2">
            What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
          </p>

          <div className="space-y-0 mt-12">
            {acts.map((act, index) => (
              <div key={index} className="bg-[#e7e7e7] text-black">
                <div className="flex items-center border border-black">
                  <h3 className="flex w-full text-xl font-semibold leading-none">
                    <span className="flex w-12 h-12 md:w-18 md:h-18 items-center justify-center text-2xl md:text-[3rem] border-r border-black">
                      {index + 1}
                    </span>
                    <span className="flex items-center px-4 text-2xl md:text-[3rem]">{act.title}</span>
                  </h3>
                </div>
                <div className="border-x border-black p-4">
                  <p className="text-lg md:xl font-normal leading-tight">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EightActsSection;