import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addItem, deleteItem, setNewQuantity } from "./slices/cartSlice";
import type { RootState } from "./index";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    matcher: isAnyOf(addItem, deleteItem, setNewQuantity),
    effect: (action, listenerApi) =>
        localStorage.setItem(
            "cart",
            JSON.stringify((listenerApi.getState() as RootState).cart)
        )
});