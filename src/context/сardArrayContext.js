import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext({
    items: [],
    cardCheckBoxClick: () => {},
    viewOnlyCheckBoxClick: () => {},
    addNewCard: () => {},
    deleteSelectedCard: () => {},
    viewOnly: false
});

export default function CardContextProvider({ children }) {
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const apiUrl =
            'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';
        axios.get(apiUrl).then(resp => {
            const allCards = resp.data;
            const resData = allCards
                .filter(el => el.Number < 16)
                .map(el => {
                    return {
                        id: el.Number,
                        title: el.Name,
                        text: el.About,
                        isActive: false
                    };
                });
            setData(resData);
        });
    }, []);

    function changeActiveHandler(id) {
        setData(cards =>
            cards.map(card => {
                if (card.id === id) {
                    const prev = { ...card };
                    prev.isActive = !card.isActive;
                    return prev;
                }
                return card;
            })
        );
    }

    function deleteHandler() {
        setData(card => card.filter(el => !el.isActive));
    }

    function changeCheckboxApp() {
        setChecked(!checked);
    }

    function addNewCard() {
        setData([
            {
                id: uuidv4(),
                title: '',
                text: '',
                isActive: false
            },
            ...data
        ]);
    }

    const contextValue = {
        items: data,
        cardCheckBoxClick: changeActiveHandler,
        viewOnlyCheckBoxClick: changeCheckboxApp,
        addNewCard: addNewCard,
        deleteSelectedCard: deleteHandler,
        viewOnly: checked
    };
    return (
        <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
    );
}
