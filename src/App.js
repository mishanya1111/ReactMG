import logo from './logo.svg';
import './first.css';
import { useContext } from 'react';
import CardList from './CardsComponent/CardList';

import { CardContext } from "./CardsComponent/contextCardList";

function App() {
    const { viewOnlyCheckBoxClick, addNewCard, deleteSelectedCard } =
        useContext(CardContext);

    return (
        <div>
            <header className="AppHeader">
                <img src={logo} className="AppLogo" alt="logo" />
                <h1>Some very informative title</h1>

                <div className="checkboxView">
                    <input
                        type="checkbox"
                        onChange={viewOnlyCheckBoxClick}
                        id="checboxView"
                        className="checkboxView"
                    />
                    <label htmlFor="checboxView">View only</label>
                </div>
                <button onClick={addNewCard} style={{ marginLeft: 10 }}>
                    Add Card
                </button>
                <button onClick={deleteSelectedCard} style={{ marginLeft: 10 }}>
                    Delete selected cards
                </button>
            </header>
            <div className="cardContainer">
                <CardList />
            </div>
        </div>
    );
}

export default App;
