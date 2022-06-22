import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardContainerSlice from '../components/CardContainer/reducers/cardContainerReducer';

export const store = configureStore({
    reducer: {
        cards: cardContainerSlice
    }
});