import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initalDate = {
    viewOnlyMod: false,
    cards: [],
    error: null,
    loading: false,
    value: 0
};

const cardArraySlice = createSlice({
    name: 'counter',
    initialState: initalDate,
    reducers: {
        addNewCard: state => {
            state.cards.push({
                id: uuidv4(),
                title: '',
                text: '',
                isActive: false
            });
        },
        changeActiveById: (state, action) => {
            state.cards = state.cards.map(card => {
                if (card.id === action.payload) {
                    console.log(card.id);
                    const prev = { ...card };
                    prev.isActive = !card.isActive;
                    return prev;
                }
                return card;
            });
        },
        deleteHandler: state => {
            state.cards = state.cards.filter(item => !item.isActive);
        },
        changeViewMode: state => {
            state.viewOnlyMod = !state.viewOnlyMod;
        },
        setCards: (state, action) => {
            state.cards = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        updateCard: (state, action) => {
            const { id, title, text } = action.payload;
            const card = state.cards.find(card => card.id === id);
            if (card) {
                card.title = title;
                card.text = text;
            }
        },
        resetActive: (state, action) => {
            const card = state.cards.find(card => card.id === action.payload);
            if (card) {
                card.isActive = false;
            }
        }
    }
});

export const {
    addNewCard,
    deleteHandler,
    changeViewMode,
    changeActiveById,
    setCards,
    setError,
    setLoading,
    resetActive,
    updateCard
} = cardArraySlice.actions;
export default cardArraySlice.reducer;
