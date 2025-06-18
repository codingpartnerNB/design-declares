import React, { useState } from "react";
import { motion } from "framer-motion";
import { posts, categories, chapters } from "../footerData";


const LatestCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      selectedCategory === "All" || post.type === selectedCategory;
    const chapterMatch =
      selectedChapter === "All" || post.chapter === selectedChapter;
    return categoryMatch && chapterMatch;
  });

  return (
    <section className="py-6 px-6 md:px-10 pb-48">
      <div className="mx-auto space-y-24">
        <div className="text-6xl font-bold mb-8">D!</div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Sidebar Filters */}
          <motion.aside
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-10 md:sticky md:top-8 h-fit mb-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-[2px] rounded-full cursor-pointer transition-all ${
                      category === selectedCategory
                        ? "bg-[#FF5630] text-white"
                        : "bg-[#272727] text-gray-300 hover:bg-white hover:text-black"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">View by Chapter</h2>
              <div className="flex flex-wrap gap-2">
                {chapters.map((chapter) => (
                  <button
                    key={chapter}
                    onClick={() => setSelectedChapter(chapter)}
                    className={`px-3 py-[2px] rounded-full cursor-pointer transition-all ${
                      chapter === selectedChapter
                        ? "bg-[#FF5630] text-white"
                        : "bg-[#272727] text-gray-300 hover:bg-white hover:text-black"
                    }`}
                  >
                    {chapter}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Posts Section */}
          <main className="space-y-6 lg:col-span-2">
            <div className="flex-1 grid gap-10">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={`${post.title}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    className="flex flex-col md:flex-row gap-6 items-start cursor-pointer mb-8"
                  >
                    <div className="w-full md:w-[450px] max-w-full h-[300px] bg-black overflow-hidden group">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3 items-center text-sm text-[#C4C4C4] font-semibold">
                        <span className="bg-[#272727] px-3 py-1 rounded-full">
                          {post.type}
                        </span>
                        <span className="bg-[#272727] px-3 py-1 rounded-full">
                          {post.chapter}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-3xl font-semibold leading-tight mb-2">
                        {post.title}
                      </h3>
                      <p className="text-[16px] font-normal text-gray-300">
                        {post.excerpt}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 text-gray-400"
                >
                  No posts found matching the selected filters.
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default LatestCategories;