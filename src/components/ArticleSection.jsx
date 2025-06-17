import React from "react";

const articles = [
  {
    category: "Case Studies",
    chapter: "D! Ireland",
    date: "30.04.2025, 04 pm:30",
    title: "Embedding Sustainability in the Design Curriculum",
    description:
      "Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.",
    image:
      "https://cdn.pixabay.com/photo/2017/02/15/12/12/book-2067789_1280.jpg",
  },
  {
    category: "Events",
    chapter: "D! UK",
    date: "24.04.2025, 03 pm:30",
    title:
      "SD4P Collective: How can Service Design drive meaningful sustainability impact",
    description:
      "Recap: SD4P Collective working session – 28th March 2025",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/20/57/students-1284257_1280.jpg",
  },
];

const ArticlesSection = () => {
  return (
    <div className="bg-black text-white p-6 md:flex md:gap-10">
      {/* Sidebar */}
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img src="/logo.svg" alt="D!" className="w-12 mb-4" />
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Events", "Case Studies", "Updates", "Perspective"].map(
            (cat, i) => (
              <span
                key={i}
                className={`text-sm px-3 py-1 rounded-full ${
                  i === 0
                    ? "bg-[#FC5B33] text-white"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {cat}
              </span>
            )
          )}
        </div>
        <h2 className="text-lg font-semibold mb-3">View by Chapter</h2>
        <div className="flex flex-wrap gap-2">
          {["All", "D! UK", "D! Ireland", "D! Australia"].map((chap, i) => (
            <span
              key={i}
              className={`text-sm px-3 py-1 rounded-full ${
                i === 0
                  ? "bg-[#FC5B33] text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              {chap}
            </span>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="md:w-2/3 space-y-10">
        {articles.map((item, i) => (
          <div key={i} className="md:flex gap-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 h-60 object-cover mb-4 md:mb-0"
            />
            <div className="md:w-1/2">
              <div className="flex flex-wrap gap-2 text-sm mb-2">
                <span className="bg-gray-800 px-2 py-1 rounded">{item.category}</span>
                <span className="bg-gray-800 px-2 py-1 rounded">{item.chapter}</span>
                <span className="text-gray-400">{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
