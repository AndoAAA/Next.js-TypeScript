"use client";

import { addToCart, removeFromCart } from "@/lib/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React from "react";
import { FaCheck, FaHeart, FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";
import { addToWishList, removeFromWishList } from "@/lib/wishListSlice";

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
  category,
  inStock,
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItems = useAppSelector((state) => state.wishList.items);
  const isInCart = cartItems.some((item) => item.id === id);
  const isInWishList = wishListItems.some((item) => item.id === id);

  const handleToggleWishlist = () => {
    if (isInWishList) {
      dispatch(removeFromWishList(id));
      toast.success("Removed from wishlist", {
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
        addToWishList({
          id,
          name: text,
          price,
          image,
          quantity: 1,
          category,
          inStock,
        })
      );
      toast.success("Successfully Added To Wishlist", {
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

  const handleToggleCart = () => {
    if (!inStock) {
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
          category,
          inStock,
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
        {!inStock && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 px-4 py-3 m-0">
        {text}
      </h3>
      <div className="flex items-center justify-between px-4 pt-0 pb-4 m-0">
        <span className="text-xl font-bold text-gray-700">
          ${Number(price).toFixed(2)}
        </span>
        <div className="flex space-x-3">
          <FaHeart
            onClick={handleToggleWishlist}
            className={`cursor-pointer ${
              isInWishList ? "text-red-500" : "text-gray-600 hover:text-red-500"
            }`}
          />
          <button
            onClick={handleToggleCart}
            className={`cursor-pointer ${
              isInCart ? "text-green-500" : "text-gray-600 hover:text-green-500"
            }`}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
