
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Plant {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Plant {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalCost: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      state.totalItems += 1;
      state.totalCost += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalItems -= item.quantity;
        state.totalCost -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;
        
        if (item.quantity === 0) {
          state.items = state.items.filter(cartItem => cartItem.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
