import logo from '../logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addNewCard, deleteHandler, changeViewMode } from '../store/cardArraySlice';

const InputViewOnly = styled.input`
    &:hover {
        scale: 2;
    }
`;

export default function Header() {
    const dispatch = useDispatch();
    const { cards, viewOnlyMod, error } = useSelector(state => state.counter);

    return (
        <header className="AppHeader">
            <div className="headerLeft">
                <img src={logo} className="AppLogo" alt="logo" />
                <h1>Some very informative title</h1>
            </div>

            {!error && (
                <div className="headerRight">
                    <span className="badge" style={{ marginLeft: 10 }}>
                        Count card: {cards.length}
                    </span>

                    <div className="checkboxView">
                        <InputViewOnly
                            type="checkbox"
                            onChange={() => dispatch(changeViewMode())}
                            id="checboxView"
                            className="checkboxView"
                            checked={viewOnlyMod}
                        />
                        <label htmlFor="checboxView">View only</label>
                    </div>

                    <button
                        onClick={() => dispatch(addNewCard())}
                        style={{ marginLeft: 10 }}
                    >
                        Add Card
                    </button>

                    <button
                        onClick={() => dispatch(deleteHandler())}
                        style={{ marginLeft: 10 }}
                    >
                        Delete selected cards
                    </button>
                </div>
            )}
        </header>
    );
}
