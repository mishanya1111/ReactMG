import logo from './logo.svg';
import './first.css';
import {useState, useRef} from "react";
import {MdOutlineCancel} from "react-icons/md";
import {FaSave} from "react-icons/fa";
import {AiOutlineEdit} from "react-icons/ai";

function Card({baseStyle, alternativeStyle, firstTitle, firstText}) {
    const [style, setStyle] = new useState(baseStyle);
    const [editing, setEditing] = new useState(false);
    const [title, setTitle] = new useState(firstTitle);
    const [text, setText] = new useState(firstText);
    const [button, setButton] = new useState(<>Edit<AiOutlineEdit/></>);
    const checkboxRef = useRef(null);


    function changeStyle() {
        setStyle((oldStyle) => oldStyle === baseStyle ? alternativeStyle : baseStyle);
    }

    function changeEditing() {
        setEditing((edit) => !edit);
    }

    function titleChangeHandler(event) {
        setButton(<>Save<FaSave/></>);
        setTitle(event.target.value);
    }

    function textChangeHandler(event) {
        setButton(<>Save<FaSave/></>);
        setText(event.target.value);
    }

    function editingHandler() {

        if (!editing) {
            setButton(<>Cancel <MdOutlineCancel/></>);
            if (checkboxRef.current && checkboxRef.current.checked) {
                checkboxRef.current.checked = false;
                setStyle(baseStyle);
            }
        } else {
            setButton(<>Edit<AiOutlineEdit/></>);
            //checkbox.style.opacity = 1;
        }
        changeEditing();
    }

    return (<div className="card">
        <div className={style} id='divTitle'>
            <h2 style={{width: 50}}>
                {editing ?
                    <input type='text' onChange={titleChangeHandler} value={title} style={{width: 110}}/> : title}
            </h2>
            {editing ? "": <input type="checkbox" ref={checkboxRef}  className = "check1" onChange={changeStyle}/>  }
            <button onClick={editingHandler}
                    style={{
                        width: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}>{button}</button>


        </div>
        <p className={style}>
            {editing ? <textarea onChange={textChangeHandler} value={text}
                                 style={{
                                     width: 350,
                                     height: 140
                                 }}/> : text}
        </p>
    </div>);
}

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
