import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="w-full px-4 sm:px-6 lg:px-8 md:pt-16 pt-4 pb-10">
        <div className="max-w-8xl md:px-15 mx-auto flex flex-col gap-8">
          {/* Small badge */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] opacity-60">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
            Rent Ease Marketplace
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl font-medium font-main leading-tight">
            Rent what you need{" "}
            <span className="text-[var(--accent-primary)]">
              when you <br className="hidden md:block" /> need it
            </span>{" "}
            without buying.
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base opacity-70 max-w-xl">
            Discover cameras, electronics, furniture and more from people around
            you. Renting saves money, space and the planet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => navigate("/products")}
              className=" relative overflow-hidden px-8 sm:px-10 md:px-7 py-4 sm:py-3.5 md:py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-blue)]/20 shadow-sm transition-all duration-500 ease-out group sm:w-auto"
            >
              <span className="flex items-center uppercase text-sm justify-center gap-2">
               Browse Rentals <ChevronRight size={18}/>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
