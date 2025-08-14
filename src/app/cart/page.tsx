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

  // Subtotal calculation (ensure price is number)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  // Total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Shopping Bag
      </h1>
      <p className="text-gray-600 mb-6">{totalItems} items in the bag</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-700 mb-4">Your cart is empty</p>
                <Link
                  href="/products"
                  className="inline-block bg-[#a91f64] text-white px-4 py-2 rounded-md hover:bg-[#8a1b54] text-sm sm:text-base"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 text-gray-700 font-semibold mb-4">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Total</div>
                  <div></div>
                </div>

                {/* Items */}
                {cartItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-start sm:items-center py-4 ${
                      idx < cartItems.length - 1
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                  >
                    {/* Product */}
                    <div className="flex items-center gap-4 w-full">
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded"
                        />
                      </div>
                      <p className="text-gray-800 font-medium text-sm sm:text-base">
                        {item.name}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-gray-700 text-sm sm:text-base flex justify-between w-full sm:block">
                      <span className="sm:hidden font-semibold">Price:</span>$
                      {Number(item.price).toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center w-full sm:w-auto">
                      <span className="sm:hidden font-semibold mr-2">
                        Quantity:
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded hover:bg-gray-300 text-black text-xl cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-7 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded hover:bg-gray-300 text-black text-xl cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Total */}
                    <div className="text-gray-700 text-sm sm:text-base flex justify-between w-full sm:block">
                      <span className="sm:hidden font-semibold">Total:</span>$
                      {(Number(item.price) * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <div className="self-center sm:self-auto">
                      <FaTrash
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}

                {/* Subtotal */}
                <div className="text-right mt-6 text-lg font-semibold">
                  Subtotal: ${subtotal.toFixed(2)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
