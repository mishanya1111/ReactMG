import logo from './logo.svg';
//import './App.css';
import './first.css';


function Card() {
    return (
        <div className="">
            {/*<title>Props</title>*/}
            <h2>
                React
            </h2>
            <p>React components use props to communicate with each other. Every parent component can pass some
                information
                to its child components by giving them props. Props might remind you of HTML attributes, but you can
                pass any
                JavaScript value through them, including objects, arrays, and functions.
                You will learn</p>
        </div>
    );
}
function App() {
    return (
        <div className="block">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <Card/>
        </div>
    );
}

export default App;
