import { createSlice } from "@reduxjs/toolkit"

const bagItemsSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload);
        },
        removeFromBag: (state, action) => {
            return state.filter((itemId) => itemId !== action.payload);
        }
    }
})
export const bagItemsSliceActions = bagItemsSlice.actions;
export default bagItemsSlice;