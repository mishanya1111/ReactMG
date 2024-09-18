import logo from './logo.svg';
import './first.css';
import {useState} from "react";
import CardList from "./CardsComponent/CardList";

function App() {
    const [checked, setChecked] = useState(false);
    const [boolDeleteSelectedCards, setBoolDeleteSelectedCards] = useState(false);

    function handleDeleteSelectedCards() {
        setBoolDeleteSelectedCards(true);
    }

    function changeCheckboxApp() {
        setChecked(!checked);
    }

    return (<div>
            <header className="AppHeader">
                <img src={logo} className="AppLogo" alt="logo"/>
                <h1>Some very informative title</h1>
                <div className='checkboxView'>
                    <label htmlFor='checboxView'>View only</label>
                    <input type="checkbox" onChange={changeCheckboxApp} id='checboxView' className='checkboxView'/>
                </div>
                <button onClick={handleDeleteSelectedCards} className="deleteButton" style={{marginLeft: 10}}>
                    Delete selected cards
                </button>
            </header>
            <div className="cardContainer">
                <CardList
                    checked={checked}
                    boolDeleteSelectedCards={boolDeleteSelectedCards}
                    setBoolDeleteSelectedCards={setBoolDeleteSelectedCards}
                />
            </div>
        </div>

    )
}

export default App;
