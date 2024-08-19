import logo from './logo.svg';
import './first.css';
import Card from './Card'
import {useState} from "react";

function App() {
    const [checked, setChecked] = useState(false);

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
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="React"
                      firstText="React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions."/>
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="Proops"
                      firstText="Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data. "/>
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="Markup"
                      firstText="The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box. JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags."/>
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="Updating the screen"
                      firstText="Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component. First, import useState from React:"/>
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="React"
                      firstText="React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions."/>
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="Proops"
                      firstText="Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data. "/>
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="Markup"
                      firstText="The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box. JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags."/>
                <Card baseStyle="borderBox" alternativeStyle="yellowBox"
                      checkViewOnly={checked} firstTitle="Updating the screen"
                      firstText="Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component. First, import useState from React:"/>

            </div>
        </div>
    )
}

export default App;
