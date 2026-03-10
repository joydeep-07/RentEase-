import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../utils/data";
import { Star } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  const product = data.find((item) => item.id === Number(id));

  if (!product) return <h1 className="text-center mt-20">Product Not Found</h1>;

  return (
    <div className="w-7xl py-10 px-6 mx-auto">
      {/* Breadcrumb */}
      <p className="text-[var(--text-secondary)]">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
        <span className="text-[var(--accent-primary)]">
          {product.productName}
        </span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-6">
        {/* Image Section */}
        <div className="flex gap-3">
          {/* Main Image */}
          <div className="border border-[var(--border-light)] max-w-[400px] rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.productName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="text-sm w-full">
          <h1 className="text-4xl font-medium font-heading text-[var(--text-main)]">
            {product.productName}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                size={16}
                fill="var(--accent-primary)"
                color="var(--accent-primary)"
              />
            ))}
            <Star size={16} color="var(--accent-primary)" />
            <p className="ml-2 text-[var(--text-secondary)]">(4)</p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-[var(--text-secondary)] line-through">
              Deposit: ₹{product.securityDeposit}
            </p>
            <p className="text-2xl font-medium text-[var(--accent-primary)]">
              ₹{product.pricePerDay} / day
            </p>
            <span className="text-[var(--text-secondary)]">
              (inclusive of all taxes)
            </span>
          </div>

          {/* About */}
          <p className="text-base font-medium mt-6 text-[var(--text-main)]">
            About Product
          </p>

          <ul className="list-disc ml-4 text-[var(--text-secondary)]">
            <li>Brand: {product.brand}</li>
            <li>Condition: {product.condition}</li>
            <li>{product.description}</li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button className="w-full py-3.5 font-medium bg-[var(--accent-primary)] text-white hover:opacity-90 transition">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
