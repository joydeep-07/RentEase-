import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="max-w-8xl px-15 mx-auto flex flex-col gap-8">
          {/* Small badge */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] opacity-60">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
            Rent Ease Marketplace
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading leading-tight">
            Rent what you need{" "}
            <span className="text-[var(--accent-primary)]">
              when you <br /> need it
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
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white text-sm font-medium hover:opacity-90 transition"
            >
              Browse Rentals
              <ArrowRight className="w-4 h-4" />
            </button>

          
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Hero;
