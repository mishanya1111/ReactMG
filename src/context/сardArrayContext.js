import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext({
    items: [],
    cardCheckBoxClick: () => {},
    viewOnlyCheckBoxClick: () => {},
    addNewCard: () => {},
    deleteSelectedCard: () => {},
    viewOnly: false,
    fetchingDate: false,
    errorFetch: false
});

export default function CardContextProvider({ children }) {
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(undefined);

    async function fetchData() {
        setFetching(true);
        try {
            const apiUrl =
              'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';
            const resp = await axios.get(apiUrl);
            const allCards = resp.data;
            const resData = allCards.slice(0, 15).map(el => {
                return {
                    id: el.Number,
                    title: el.Name,
                    text: el.About,
                    isActive: false
                };
            });
            setData(resData);
        } catch (err) {
            setError(err);
            //alert(`The data was not fetch\nError message:${err.message}`);
        }
        finally {
            setFetching(false);
        }

    }
    useEffect(() => {

        fetchData();
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
        if (error) {
            setError(false);
        }
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
        viewOnly: checked,
        fetchingDate: fetching,
        errorFetch: error
    };
    return (
        <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
    );
}
