import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            // to prevent adding same item to wishlist
            const newItem = action.payload;
            const existingItem = state.find(item => item.id === newItem.id);

            if (!existingItem) {
                state.push(newItem);
            }

        },
        removefromwishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const { addToWishlist , removefromwishlist } = wishListSlice.actions;
export default wishListSlice.reducer;