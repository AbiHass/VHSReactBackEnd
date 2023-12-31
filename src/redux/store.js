import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  categoriesReducer  from "./categories/categoriesSlice";
import  productsReducer  from "./products/productsSlice";
import { persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";

import cartReducer from './cart/cartSlice';

import userReducer from './user/userSlice'
import ordersReducer from './orders/ordersSlice'

const reducers = combineReducers({
    categories : categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
});


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart', 'user']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)

