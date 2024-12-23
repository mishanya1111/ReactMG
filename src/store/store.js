import { configureStore } from '@reduxjs/toolkit';
import cardArraySlice from './cardArraySlice';

export const store = configureStore({
    reducer: {
        counter: cardArraySlice
    }
});
