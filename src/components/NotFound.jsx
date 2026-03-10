import React from "react";
import Lottie from "lottie-react";
import cat from "../assets/animation/cat.json";

const NotFound = ({msg, heading}) => {
  return (
    <div className="py-20 flex flex-col items-center justify-start bg-[var(--bg-primary)] text-center px-4">
      {/* Animation */}
      <div className="w-72 md:w-96">
        <Lottie animationData={cat} loop={true} />
      </div>

      {/* Text */}
      <h1 className="text-3xl md:text-4xl font-heading mt-6 text-[var(--text-main)]">
       {heading}
      </h1>

      <p className="mt-2 text-[var(--text-secondary)] max-w-xl">
       {msg}
      </p>
    </div>
  );
};

export default NotFound;
