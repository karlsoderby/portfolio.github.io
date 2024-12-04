import React from "react";
import vent_1 from "../assets/vent_1.png";
import ContentSection from "../components/ContentSection"; // Adjust the path as necessary

const Ventanas95Page = () => {
  return (
    <div className="space-y-8">
      {/* First Section */}
      <ContentSection
        title="Ventanas95 - Style Plugin"
        text="Creating a modern style plugin for styling e-commerce sites."
        imgSrc={vent_1}
      />

      <hr className="border-t border-gray-300" />

      {/* Second Section with Reversed Layout */}
      <ContentSection
        title="Ventanas95 - Style Plugin"
        text="Creating a modern style plugin for styling e-commerce sites."
        imgSrc={vent_1}
        reverse
      />
    </div>
  );
};

export default Ventanas95Page;