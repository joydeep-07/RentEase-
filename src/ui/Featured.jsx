import React from 'react'

const Featured = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 md:pt-16 pt-4 pb-10">
      <div className="max-w-8xl md:px-15 mx-auto flex flex-col gap-8">
        <div>
          {/* HEADER */}
          <h2 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-medium font-main leading-tight mb-4">
            Our <span className="text-[var(--accent-primary)]">Featured {" "} </span>
            Products
          </h2>

          <p className="text-sm sm:text-base md:text-base opacity-70 max-w-full sm:max-w-xl mb-4">
            Discover cameras, electronics, furniture and more from people around
            you. Renting saves money, space, and the planet.
          </p>
        </div>
        {/* CAROUSEL */}

      </div>
    </section>
  );
}

export default Featured