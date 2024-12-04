import React from "react";

const ContentSection = ({ title, text, imgSrc, reverse = false }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 ${
        reverse ? "md:flex-row-reverse" : ""
      } md:space-x-4`}
    >
      {/* Text Section */}
      <div className="w-1/2 flex flex-col justify-center h-[400px]">
        <h3 className="text-3xl font-bold font-afacad-flux mb-4">{title}</h3>
        <p className="text-xl">{text}</p>
      </div>

      {/* Image Section */}
      <div className="w-1/2">
        <img
          src={imgSrc}
          alt={title}
          className="max-h-[400px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContentSection;