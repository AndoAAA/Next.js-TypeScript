"use client";

import { addToCart, removeFromCart } from "@/lib/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React from "react";
import { FaCheck, FaHeart, FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";

interface ProductCardProps {
  id: number;
  image: string;
  text: string;
  price: number;
  category?: string;
  inStock?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  text,
  price,
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
      toast.success("Removed from cart", {
        duration: 3000,
        position: "bottom-center",
        icon: <FaCheck className="text-white" />,
        style: {
          background: "#ef4444",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease",
        },
      });
    } else {
      dispatch(
        addToCart({
          id,
          name: text,
          price,
          image,
          quantity: 1,
        })
      );
      toast.success("Successfully Added To Cart", {
        duration: 3000,
        position: "bottom-center",
        icon: <FaCheck className="text-white" />,
        style: {
          background: "#22c55e",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease",
        },
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-visible flex flex-col h-[280px]">
      <div className="relative w-full h-[200px]">
        <Image src={image} alt={text} fill style={{ objectFit: "cover" }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 px-4 py-3 m-0">
        {text}
      </h3>
      <div className="flex items-center justify-between px-4 pt-0 pb-4 m-0">
        <span className="text-xl font-bold text-gray-700">${price.toFixed(2)}</span>
        <div className="flex space-x-3">
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer" />
          <FaShoppingCart
            className={`cursor-pointer ${
              isInCart ? "text-green-500" : "text-gray-600 hover:text-green-500"
            }`}
            onClick={handleToggleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
