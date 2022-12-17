import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem, Product} from "../../pages";
type SliceState = { items: Array<CartItem> }
const initialState:SliceState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCart: (state, action:PayloadAction<string|null>)=>{
          state.items = action.payload?JSON.parse(action.payload || '{}').items:[];
            console.log(JSON.parse(action.payload || '{}'));
        },
        addItem: (state, action: PayloadAction<Product>) => {
            let newItem = action.payload;
            let cardItem = state.items.filter((el) => el.id === newItem.id);
            if(cardItem.length > 0){
                state.items[state.items.indexOf(cardItem[0])].quantity += 1;
            } else {
                state.items.push({id:newItem.id, title: newItem.title, price: newItem.price, quantity: 1});
            }
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((el) => el.id !== action.payload);
        },
        setNewQuantity: (state, action:PayloadAction<{itemId: number, newQuantity: number}>) => {
            let cardItem = state.items.filter((el) => el.id === action.payload.itemId);
            if(cardItem.length > 0){
                state.items[state.items.indexOf(cardItem[0])].quantity = action.payload.newQuantity;
            }
        }
    },
});

export const { getCart, addItem, deleteItem, setNewQuantity } = cartSlice.actions;

export default cartSlice.reducer;