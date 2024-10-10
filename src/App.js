import logo from './logo.svg';
import './first.css';
import { useContext } from 'react';
import CardList from './сomponents/CardList';

import { CardContext } from './context/сardArrayContext';

function App() {
    const { viewOnlyCheckBoxClick, addNewCard, deleteSelectedCard, items } =
        useContext(CardContext);

    return (
        <div>
            <header className="AppHeader">
                <img src={logo} className="AppLogo" alt="logo" />
                <h1>Some very informative title</h1>
                <span className="badge" style={{ marginLeft: 10 }}>
                    Count card: {items.length}
                </span>
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
