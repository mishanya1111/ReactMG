import logo from "../logo.svg";
import { useContext } from "react";
import { CardContext } from "../context/сardArrayContext";
import styled from 'styled-components';
const InputViewOnly = styled.input`
    &:hover {
        scale: 2;
    }
`;
export default function Header() {
    const {
        viewOnlyCheckBoxClick,
        addNewCard,
        deleteSelectedCard,
        items,
        error,
        fetchingDate
    } = useContext(CardContext);
    return (
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
                        <InputViewOnly
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

    )

}