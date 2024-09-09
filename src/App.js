import logo from './logo.svg';
import './first.css';
import Card from './Card'
import {useState} from "react";

function App() {
    const [checked, setChecked] = useState(false);
    const cardsData = [
        {
            id: 1,
            title: "React",
            text: "React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.",
        },
        {
            id: 2,
            title: "Proops",
            text: "Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data."
        },
        {
            id: 3,
            title: "Markup",
            text: "The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box. JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags."
        },
        {
            id: 4,
            title: "Updating the screen",
            text: "Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component. First, import useState from React."
        },
        {
            id: 5,
            title: "React",
            text: "React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions."
        },
        {
            id: 6,
            title: "Proops",
            text: "Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data."
        },
        {
            id: 7,
            title: "Markup",
            text: "The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box. JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags."
        },
        {
            id: 8,
            title: "Updating the screen",
            text: "Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component. First, import useState from React."
        }
    ];
    const arrayCards = cardsData.map((card) => <Card viewOnlyChecked={checked} firstTitle={card.title} firstText={card.text} /> )
    console.log(arrayCards);
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
