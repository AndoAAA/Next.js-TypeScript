"use client";

import { removeFromCart, updateQuantity } from "@/lib/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  // Update quantity
  const handleUpdateQuantity = (id: number, delta: number) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    const newQuantity = Math.max(1, item.quantity + delta);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  // Remove item
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  // Total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        🛒 Shopping Bag
      </h1>
      <p className="text-gray-600 mb-8">{totalItems} items in your bag</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-700 mb-6 text-lg">
                  Your cart is empty 😔
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
                {/* Header */}
                <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 text-gray-700 font-semibold pb-3 border-b">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Total</div>
                </div>

                {/* Items */}
                {cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-start sm:items-center py-6 border-b last:border-none"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-4 w-full">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg shadow-sm"
                        />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-base">
                          {item.name}
                        </p>
                        <p className="text-gray-500 text-sm">{item.category}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-gray-700 text-sm sm:text-base">
                      ${Number(item.price).toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100 text-lg font-medium cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 text-lg font-medium cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Total */}
                    <div className="text-gray-900 font-semibold text-sm sm:text-base">
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <div className="self-center sm:self-auto">
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

        {/* Right: Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Cart Summary</h3>

            {/* Coupon */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Coupon Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64]"
                />
                <button className="bg-[#a91f64] text-white px-4 py-2 rounded-lg hover:bg-[#8a1b54] text-sm font-medium transition cursor-pointer">
                  Apply
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between text-lg font-semibold border-t pt-4">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              disabled={cartItems.length === 0}
              className="w-full bg-[#a91f64] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8a1b54] disabled:bg-gray-300 disabled:cursor-not-allowed transition cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
