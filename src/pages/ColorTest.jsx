import React from "react";
import ThemeToggle from "../components/ThemeToggle";

const ColorTest = () => {
  const colorBox =
    "h-24 rounded-xl flex items-center justify-center text-sm border border-[var(--border-light)]";

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-10 space-y-12 transition-all">
      <ThemeToggle />

      {/* Heading Font */}
      <section>
        <h1 className="heading-font text-4xl mb-3">
          Heading{" "}
          <span className="text-[var(--accent-primary)]">Font Preview</span>
        </h1>

        <p className="text-[var(--text-secondary)]">Secondary text preview</p>

        <p className="text-[var(--text-muted)]">Muted text preview</p>
      </section>

      {/* Backgrounds */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Background Colors</h2>

        <div className="grid grid-cols-4 gap-4">
          <div className={`${colorBox} bg-[var(--bg-main)]`}>bg-main</div>

          <div className={`${colorBox} bg-[var(--bg-secondary)]`}>
            bg-secondary
          </div>

          <div className={`${colorBox} bg-[var(--bg-tertiary)]`}>
            bg-tertiary
          </div>

          <div className={`${colorBox} bg-[var(--bg-card)]`}>bg-card</div>

          <div
            className={`${colorBox} col-span-2`}
            style={{ background: "var(--bg-gradient)" }}
          >
            gradient
          </div>
        </div>
      </section>

      {/* Accent Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Accent Colors</h2>

        <div className="grid grid-cols-4 gap-4">
          <div className={`${colorBox} bg-[var(--accent-primary)] text-black`}>
            primary
          </div>

          <div
            className={`${colorBox} bg-[var(--accent-secondary)] text-black`}
          >
            secondary
          </div>

          <div className={`${colorBox} bg-[var(--accent-pink)] text-white`}>
            pink
          </div>

          <div className={`${colorBox} bg-[var(--accent-purple)] text-white`}>
            purple
          </div>

          <div className={`${colorBox} bg-[var(--accent-blue)] text-white`}>
            blue
          </div>

          <div className={`${colorBox} bg-[var(--accent-green)] text-black`}>
            green
          </div>
        </div>
      </section>

      {/* Status Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Status Colors</h2>

        <div className="grid grid-cols-4 gap-4">
          <div className={`${colorBox} bg-[var(--sale)] text-white`}>sale</div>

          <div className={`${colorBox} bg-[var(--success)] text-black`}>
            success
          </div>

          <div className={`${colorBox} bg-[var(--warning)] text-black`}>
            warning
          </div>

          <div className={`${colorBox} bg-[var(--info)] text-black`}>info</div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 rounded-lg bg-[var(--accent-primary)] text-black hover:opacity-90">
            Primary
          </button>

          <button className="px-6 py-2 rounded-lg bg-[var(--accent-secondary)] text-black hover:opacity-90">
            Secondary
          </button>

          <button className="px-6 py-2 rounded-lg bg-[var(--accent-purple)] text-white">
            Premium
          </button>

          <button className="px-6 py-2 rounded-lg border border-[var(--border-light)]">
            Outline
          </button>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Inputs</h2>

        <input
          type="text"
          placeholder="Test input field"
          className="px-4 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] w-80 outline-none"
        />
      </section>

      {/* Card Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Card</h2>

        <div className="p-6 rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] max-w-md shadow-[var(--shadow-soft)]">
          <h3 className="heading-font text-xl mb-2">Product Card</h3>

          <p className="text-[var(--text-secondary)]">
            Example ecommerce product card using theme variables.
          </p>

          <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-[var(--sale)] text-white">
            30% OFF
          </span>

          <button className="mt-4 px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-black">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default ColorTest;
