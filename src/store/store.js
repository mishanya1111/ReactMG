import { configureStore } from '@reduxjs/toolkit';
import cardArraySlice from './cardArraySlice';
import { thunk } from 'redux-thunk';

const actionLogger = store => next => action => {
    console.log('Dispatching action:', action.type);
    if (action.payload) {
        console.log('Action payload:', action.payload);
    } else {
        console.log('Without payload');
    }
    return next(action);
};

export const store = configureStore({
    reducer: {
        counter: cardArraySlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(thunk, actionLogger)
});
