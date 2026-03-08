import React from "react";

const Heading = ({ small, heading }) => {
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="w-full max-w-7xl">
        {/* Small Label */}
        {small && (
          <div className="">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              {small}
            </h3>
            <div className="mt-2 mb-3 h-[2px] w-24 bg-[var(--accent-primary)] rounded-full" />
          </div>
        )}

        {/* Heading */}
        <div className="">
          {heading ? (
            heading
          ) : (
            <h1 className="text-2xl font-heading sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2">
              Rent{" "}
              <span className="text-[var(--accent-primary)] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Ease
              </span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Heading;
