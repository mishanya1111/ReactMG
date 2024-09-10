import logo from './logo.svg';
import './first.css';
import Card from './Card'
import {useState} from "react";
import cardsData from './data';

function App() {
    const [checked, setChecked] = useState(false);

    const arrayCards = cardsData.map((card) => <Card viewOnlyChecked={checked} firstTitle={card.title} firstText={card.text} key={card.id}/> )
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
            </header>
            <div className="cardContainer">
                {arrayCards}
            </div>
        </div>
    )
}

export default App;
