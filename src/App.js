import logo from './logo.svg';
import './first.css';
import Card from './Card'

function App() {
    return (<div>
        <header className="AppHeader">
            <img src={logo} className="AppLogo" alt="logo"/>
            <h1>Some very informative title</h1>
        </header>
        <Card baseStyle="borderBox" alternativeStyle="yellowBox"
              firstTitle="React"
              firstText="React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions."/>
        <Card baseStyle="borderBox" alternativeStyle="yellowBox"
              firstTitle="Proops"
              firstText="Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data. "/>
    </div>);
}

export default App;
