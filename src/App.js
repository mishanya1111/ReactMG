import logo from './logo.svg';
import './first.css';
import { useState } from "react";


function Card({baseStyle,alternativeStyle}) {
    const [style, setStyle] = new useState(baseStyle);
    function changeStyle() {
        setStyle((oldStyle) => oldStyle === baseStyle ? alternativeStyle : baseStyle );
    }
    return (
        <div className="card">
            <h2 className={style}>
                React
                <input type="checkbox" onChange={changeStyle}/>
            </h2>
            <p className={style}>React components use props to communicate with each other. Every parent component can pass some
                information
                to its child components by giving them props. Props might remind you of HTML attributes, but you can
                pass any
                JavaScript value through them, including objects, arrays, and functions.
            </p>
        </div>
    );
}
function App() {
    return (
        <div >
            <header className="AppHeader">
                <img src={logo} className="AppLogo" alt="logo"/>
                <h1>Some very informative title</h1>
            </header>
            <Card baseStyle="borderBox" alternativeStyle="yellowBox" />
        </div>
    );
}

export default App;
