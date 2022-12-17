import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import {listenerMiddleware} from "./middleware";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>