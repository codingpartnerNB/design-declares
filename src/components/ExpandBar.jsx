import React, { useEffect, useState } from "react";

const ExpandBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-50 bg-transparent">
      <div
        className="h-full bg-[#FF5630] transition-all duration-200"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ExpandBar;