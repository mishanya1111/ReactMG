import logo from './logo.svg';
import './first.css';
import { useState } from 'react';
import cardsData from './data';
import CardList from './CardsComponent/CardList';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState(cardsData);

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

    return (
        <div>
            <header className="AppHeader">
                <img src={logo} className="AppLogo" alt="logo" />
                <h1>Some very informative title</h1>

                <div className="checkboxView">
                    <input
                        type="checkbox"
                        onChange={changeCheckboxApp}
                        id="checboxView"
                        className="checkboxView"
                    />
                    <label htmlFor="checboxView">View only</label>
                </div>
                <button onClick={addNewCard} style={{ marginLeft: 10 }}>
                    Add Card
                </button>
                <button onClick={deleteHandler} style={{ marginLeft: 10 }}>
                    Delete selected cards
                </button>
            </header>
            <div className="cardContainer">
                <CardList
                    onChecked={checked}
                    items={data}
                    checkBoxChange={changeActiveHandler}
                />
            </div>
        </div>
    );
}

export default App;
