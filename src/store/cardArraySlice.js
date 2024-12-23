import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initalDate = {
    viewOnlyMod: false,
    cards: [],
    error: undefined,
    value: 0
};
const cardArraySlice = createSlice({
    name: "counter",
    initialState: initalDate,
    reducers: {
        addNewCard: (state) => {
            state.cards.push({
                id: uuidv4(),
                title: "",
                text: "",
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
                }
            );
        },
        deleteHandler: (state, action) => {
            console.log(state.cards);
            state.cards = state.cards.filter((item) => !item.isActive);
            console.log(state.cards);        },
        changeViewMode: (state) => {
            state.viewOnlyMod = !state.viewOnlyMod;
        }
    }
});

export const { addNewCard, deleteHandler, changeViewMode, changeActiveById } = cardArraySlice.actions;
export default cardArraySlice.reducer;
