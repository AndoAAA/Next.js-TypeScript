"use client";

import React, { useState } from "react";
import { products } from "../../../public/data/data.json";
import ProductCard from "@/components/ProductCard";
import { FaTimes } from "react-icons/fa";

const filterOptions = [
  {
    title: "Category",
    options: ["Furniture", "Lighting", "Decor"],
  },
  {
    title: "Price Range",
    options: ["$0-$100", "$100-$300", "$300+"],
  },
  { title: "Availability", options: ["In stock", "Out of stock"] },
  {
    title: "Material",
    options: ["Wood", "Metal", "Fabric", "Leather", "Glass", "Rattan"],
  },
  {
    title: "Room type",
    options: [
      "Living Room",
      "Bedroom",
      "Dining Room",
      "Office",
      "Kids Room",
      "Kitchen",
    ],
  },
  {
    title: "Style",
    options: [
      "Modern",
      "Traditional",
      "Mid-century",
      "Bohemian",
      "Rustic",
      "Minimalist",
      "Industrial",
      "Scandinavian",
    ],
  },
];

const ProductsPage = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const renderFilters = () => (
    <div className="space-y-6">
      {filterOptions.map(({ title, options }) => (
        <div key={title}>
          <h4 className="text-base font-medium text-gray-700 mb-2">{title}</h4>
          <div className="space-y-1">
            {options.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  className="accent-[#a01f64] cursor-pointer"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 sm:py-8">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-4">
        Products
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filter Sidebar (Desktop) */}
        <aside className="hidden md:block w-full md:w-1/4 bg-white rounded-lg shadow p-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Filter Options
          </h3>
          {renderFilters()}
        </aside>

        {/* Products Section */}
        <section className="w-full md:w-3/4">
          {/* Top Controls */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Product List ({products.length})
            </h2>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-gray-700 font-medium">Sort By:</span>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a01f64]">
                <option value="default">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Mobile Sort & Filter Buttons */}
          <div className="min-[774px]:hidden sticky top-8 bg-transparent z-10 p-2">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => setFilterModalOpen(true)}
                className="bg-[#a01f64] text-white px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer"
              >
                Filters
              </button>
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a01f64] flex-1 cursor-pointer">
                <option value="default">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Modal */}
          {filterModalOpen && (
            <div
              className="max-[774px]:fixed max-[774px]:inset-0 max-[774px]:bg-gray-900 max-[774px]:bg-opacity-30 max-[774px]:z-20 max-[774px]:flex max-[774px]:justify-center max-[774px]:items-center max-[774px]:p-4 min-[774px]:hidden"
              onClick={() => setFilterModalOpen(false)}
            >
              <div
                className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg z-30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 max-[774px]:text-lg">
                    Filters
                  </h3>
                  <button
                    className="text-gray-600 hover:text-[#a01f64] text-lg cursor-pointer"
                    onClick={() => setFilterModalOpen(false)}
                  >
                    <FaTimes />
                  </button>
                </div>
                {renderFilters()}
              </div>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                text={product.text}
                price={`$${product.price}`}
                category={product.category}
                inStock={product.inStock}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
