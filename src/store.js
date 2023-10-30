import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import postReducer from './redux/reducer';
import cartReducer from './redux/cart/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  posts: postReducer,
  cart: cartReducer
}));

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
