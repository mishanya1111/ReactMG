import logo from './logo.svg';
import './first.css';


function Card({h2style, pstyle}) {
    return (
        <div className="card">
            {/*<title>Props</title>*/}
            <h2 className={h2style}>
                React
            </h2>
            <p className={pstyle}>React components use props to communicate with each other. Every parent component can pass some
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
            <Card h2style={"borderBox"} pstyle={"borderBox"}/>
        </div>
    );
}

export default App;
