import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            // to prevent adding same item to wishlist
            const newItem = action.payload;
            const existingItem = state.find(item => item.id === newItem.id);
        
            if (!existingItem) {
                state.push(newItem);
            }
        },
        removefromcart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state = [];
        }
    }
})

export const {addTocart , removefromcart , emptyCart}=cartSlice.actions
export default cartSlice.reducer;
