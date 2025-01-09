import { configureStore } from '@reduxjs/toolkit';
import cardArraySlice from './cardArraySlice';
import authenticationSlice from './authenticationSlice';

export const store = configureStore({
    reducer: {
        counter: cardArraySlice,
        authentication: authenticationSlice
    }
});
