import logo from './logo.svg';
import './first.css';
import { useContext } from 'react';
import CardList from './сomponents/CardList';
import styled from 'styled-components';
import { CardContext } from './context/сardArrayContext';
const InputViewOnly = styled.input`
    &:hover {
        scale: 2;
    }
`;
function App() {
    const {
        viewOnlyCheckBoxClick,
        addNewCard,
        deleteSelectedCard,
        items,
        error,
        fetchingDate
    } = useContext(CardContext);

    return (
        <div>
            <header className="AppHeader">

                <div className="headerLeft">
                    <img src={logo} className="AppLogo" alt="logo" />
                    <h1>Some very informative title</h1>

                </div>

                {!error && !fetchingDate && (
                    <div className="headerRight">
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

                        <button
                            onClick={deleteSelectedCard}
                            style={{ marginLeft: 10 }}
                        >
                            Delete selected cards
                        </button>
                    </div>
                )}
            </header>

            <div className="cardContainer">
                <CardList />
            </div>
        </div>
    );
}

export default App;
