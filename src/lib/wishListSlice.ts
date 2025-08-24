import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishListItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category?: string;
  inStock?: boolean;
}

interface WishListState {
  items: WishListItem[];
}

const initialState: WishListState = {
  items: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<WishListItem>) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      if (!existed) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromWishList: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
