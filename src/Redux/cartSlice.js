import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartTab:false,
        totalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount = calculateTotalAmount(state.cartItems); 
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
            state.totalAmount = calculateTotalAmount(state.cartItems); 
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            state.totalAmount = calculateTotalAmount(state.cartItems); 
        },
        removeFromCart: (state, action) => {
            // Filter out the item to be removed
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.totalAmount = calculateTotalAmount(state.cartItems);  // Update total amount
        },
        toggleCartTab : (state) => {
            state.cartTab = !state.cartTab;
        },
    },
});
    const calculateTotalAmount = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

export const { addToCart, increaseQuantity, decreaseQuantity, toggleCartTab, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
