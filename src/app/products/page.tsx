"use client";

import { useState, useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";
import data from "../../../public/data/data.json";

type FilterKey =
  | "category"
  | "priceRange"
  | "availability"
  | "material"
  | "roomType"
  | "style";

type SelectedFilters = Record<FilterKey, string[]>;

interface Product {
  id: number;
  text: string;
  price: number;
  category: string;
  inStock: boolean;
  material?: string;
  roomType?: string;
  style?: string;
  image: string;
}

const filterOptions: { title: string; key: FilterKey; options: string[] }[] = [
  {
    title: "Category",
    key: "category",
    options: ["Furniture", "Lighting", "Decor"],
  },
  {
    title: "Price Range",
    key: "priceRange",
    options: ["$0-$100", "$100-$300", "$300+"],
  },
  {
    title: "Availability",
    key: "availability",
    options: ["In stock", "Out of stock"],
  },
  {
    title: "Material",
    key: "material",
    options: ["Wood", "Metal", "Fabric", "Leather", "Glass", "Rattan"],
  },
  {
    title: "Room type",
    key: "roomType",
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
    key: "style",
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

export default function ProductsPage() {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: [],
    priceRange: [],
    availability: [],
    material: [],
    roomType: [],
    style: [],
  });

  const products: Product[] = data.products;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        selectedFilters.category.length > 0 &&
        !selectedFilters.category.includes(product.category)
      ) {
        return false;
      }
      if (
        selectedFilters.availability.length > 0 &&
        !selectedFilters.availability.includes(
          product.inStock ? "In stock" : "Out of stock"
        )
      ) {
        return false;
      }
      if (
        selectedFilters.material.length > 0 &&
        product.material &&
        !selectedFilters.material.includes(product.material)
      ) {
        return false;
      }
      if (
        selectedFilters.roomType.length > 0 &&
        product.roomType &&
        !selectedFilters.roomType.includes(product.roomType)
      ) {
        return false;
      }
      if (
        selectedFilters.style.length > 0 &&
        product.style &&
        !selectedFilters.style.includes(product.style)
      ) {
        return false;
      }
      if (selectedFilters.priceRange.length > 0) {
        const inRange = selectedFilters.priceRange.some((range) => {
          if (range === "$0-$100") return product.price <= 100;
          if (range === "$100-$300")
            return product.price > 100 && product.price <= 300;
          if (range === "$300+") return product.price > 300;
          return true;
        });
        if (!inRange) return false;
      }
      return true;
    });
  }, [products, selectedFilters]);

  // Sorted products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      sorted.sort((a, b) => a.text.localeCompare(b.text));
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  // Handle filter change
  const handleFilterChange = (filterKey: FilterKey, option: string) => {
    setSelectedFilters((prev) => {
      const values = prev[filterKey];
      if (values.includes(option)) {
        return { ...prev, [filterKey]: values.filter((v) => v !== option) };
      } else {
        return { ...prev, [filterKey]: [...values, option] };
      }
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      priceRange: [],
      availability: [],
      material: [],
      roomType: [],
      style: [],
    });
  };

  const renderFilters = () => (
    <div className="space-y-6">
      {filterOptions.map(({ title, key, options }) => (
        <div key={key}>
          <h4 className="text-base font-medium text-gray-700 mb-2">{title}</h4>
          <div className="space-y-1">
            {options.map((opt) => {
              const inputId = `${key}-${opt.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <label
                  key={opt}
                  htmlFor={inputId}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <input
                    id={inputId}
                    type="checkbox"
                    className="accent-[#a01f64] cursor-pointer"
                    checked={selectedFilters[key].includes(opt)}
                    onChange={() => handleFilterChange(key, opt)}
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        </div>
      ))}

      <button
        onClick={clearAllFilters}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition"
        aria-label="Clear all filters"
      >
        Clear All Filters
      </button>
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
              Product List ({sortedProducts.length})
            </h2>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-gray-700 font-medium">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a01f64]"
              >
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
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a01f64] flex-1 cursor-pointer"
              >
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
              role="dialog"
              aria-modal="true"
              aria-labelledby="filter-modal-title"
            >
              <div
                className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg z-30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3
                    id="filter-modal-title"
                    className="text-xl font-semibold text-gray-800 max-[774px]:text-lg"
                  >
                    Filters
                  </h3>
                  <button
                    className="text-gray-600 hover:text-[#a01f64] text-lg cursor-pointer"
                    onClick={() => setFilterModalOpen(false)}
                    aria-label="Close filter modal"
                  >
                    <FaTimes />
                  </button>
                </div>
                {renderFilters()}
                <button
                  className="bg-[#a01f64] text-white px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer mt-4"
                  onClick={() => setFilterModalOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                text={product.text}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
