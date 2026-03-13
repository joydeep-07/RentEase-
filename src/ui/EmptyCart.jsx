import React from 'react'
import Lottie from "lottie-react";
import cat from "../assets/animation/cart.json";
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <div className="py-20 flex flex-col items-center justify-start bg-[var(--bg-primary)] text-center px-4">
      {/* Animation */}
      <div className="w-72 md:w-96">
        <Lottie animationData={cat} loop={true} />
      </div>

      {/* Text */}
      <h1 className="text-3xl md:text-4xl font-heading mt-6 text-[var(--text-main)]">
        Your Cart is Empty
      </h1>

      <p className="mt-2 text-[var(--text-secondary)] max-w-xl">
        Add item to cart to order now
      </p>
      <button
        onClick={() => navigate("/products")}
        className="mt-5 relative overflow-hidden px-8 sm:px-10 md:px-7 py-3 sm:py-3.5 md:py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-blue)]/20 shadow-sm transition-all duration-500 ease-out group w-full sm:w-auto"
      >
        <span className="flex items-center uppercase text-sm justify-center gap-2">
          Browse Products
        </span>
      </button>
    </div>
  );
}

export default EmptyCart