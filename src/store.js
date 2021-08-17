import { configureStore } from "@reduxjs/toolkit";
import {applyMiddleware, createStore, combineReducers } from 'redux';
import deviceReducer from "./Features/deviceSlice.js";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
const persistConfig = {
	key: 'root-oe',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	device: deviceReducer,
    
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, window.devToolsExtension && window.devToolsExtension());
let persister = persistStore(store);

export { store, persister };

// export const store =  configureStore({
//     reducer: {
//         // persistedReducer
//         camera: cameraReducer,
//         user: userReducer,
//     },
//     preloadedState: persistedState,
// });

//store.subscribe(()=> saveToLocalStorage(store.getState()));