import logo from './logo.svg';
import './first.css';
import Card from './Card'
import {useState} from "react";
import cardsData from './data';

function App() {
    const [checked, setChecked] = useState(false);
    const [arrayOfDeleteKeys, setArrayOfDeleteKeys] = useState([]);
    const [currentCardsData, setCurrentCardsData] = useState(cardsData);

    function handleDeleteSelectedCards() {
        const filteredCards = currentCardsData.filter(card => !arrayOfDeleteKeys.includes(card.id));
        setCurrentCardsData(filteredCards);
        setArrayOfDeleteKeys([]);
    }

    const arrayCards = currentCardsData.map((card) =>
        <Card
            viewOnlyChecked={checked}
            firstTitle={card.title}
            firstText={card.text}
            key={card.id}
            id={card.id}
            setArrayOfDeleteKeys={setArrayOfDeleteKeys}
        />
    );
    function changeCheckboxApp() {
        setChecked(!checked);
    }

    return (
        <div>
            <header className="AppHeader">
                <img src={logo} className="AppLogo" alt="logo"/>
                <h1>Some very informative title</h1>
                <div className='checkboxView'>
                    <label htmlFor='checboxView'>View only</label>
                    <input type="checkbox" onChange={changeCheckboxApp} id='checboxView' className='checkboxView'/>

                </div>
                <button onClick={handleDeleteSelectedCards} className="deleteButton" style={{ marginLeft: 10}}>
                    Delete selected cards
                </button>
            </header>
            <div className="cardContainer">
                {arrayCards}
            </div>
        </div>
    )
}

export default App;
