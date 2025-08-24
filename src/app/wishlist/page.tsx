"use client";

import { addToCart } from "@/lib/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeFromWishList } from "@/lib/wishListSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeart, FaTrash } from "react-icons/fa";

const WishListPage = () => {
  const dispatch = useAppDispatch();
  const wishListItems = useAppSelector((state) => state.wishList.items);

  const handleAddToCart = (item: (typeof wishListItems)[0]) => {
    if (!item.inStock) {
      toast.error("This product is out of stock", {
        duration: 3000,
        position: "bottom-center",
        style: {
          background: "#ef4444",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: "6px",
        },
      });
      return;
    }

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
        category: item.category,
        inStock: item.inStock,
      })
    );

    dispatch(removeFromWishList(item.id));

    toast.success("Added to cart", {
      duration: 3000,
      position: "bottom-center",
      style: {
        background: "#22c55e",
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: 600,
        padding: "12px 20px",
        borderRadius: "6px",
      },
    });
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromWishList(id));
  };

  const totalItems = wishListItems.length;

  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-2">
        <FaHeart className="text-red-500 " /> Wish List
      </h1>
      <p className="text-gray-600 mb-8">
        {totalItems} item{totalItems !== 1 ? "s" : ""} in your bag
      </p>

      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          {wishListItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-700 mb-6 text-lg">
                Your wish list is empty 😔
              </p>
              <Link
                href="/products"
                className="inline-block bg-[#a91f64] text-white px-6 py-3 rounded-lg hover:bg-[#8a1b54] transition text-base font-medium shadow-md"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              {/* Desktop header */}
              <div className="hidden sm:flex items-center justify-between text-gray-700 font-semibold pb-3 border-b">
                <div className="flex-1">Product</div>
                <div className="w-32 text-center">Price</div>
                <div className="w-32 text-center">Stock</div>
                <div className="w-48 text-center">Actions</div>
              </div>

              {wishListItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 border-b last:border-none gap-4"
                >
                  {/* Product */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-800 font-semibold text-base">
                        {item.name}
                      </p>
                      {item.category && (
                        <p className="text-gray-500 text-sm">{item.category}</p>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="w-32 text-center text-gray-700 font-medium text-sm sm:text-base">
                    <span className="sm:hidden">Price:</span> $
                    {Number(item.price).toFixed(2)}
                  </div>

                  {/* Stock */}
                  <div
                    className={`w-32 text-center font-medium text-sm sm:text-base ${
                      item.inStock ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </div>

                  {/* Actions */}
                  <div className="w-48 flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`px-3 py-2 rounded-lg text-white text-sm font-medium transition ${
                        item.inStock
                          ? "bg-[#a91f64] hover:bg-[#8a1b54] cursor-pointer"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!item.inStock}
                    >
                      Add To Cart
                    </button>
                    <FaTrash
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition cursor-pointer text-lg"
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
