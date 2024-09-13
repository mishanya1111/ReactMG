import './first.css';
import {useState, useRef, useEffect} from "react";
import {MdOutlineCancel} from "react-icons/md";
import {FaSave} from "react-icons/fa";
import {AiOutlineEdit} from "react-icons/ai";

function Card({firstTitle, firstText, viewOnlyChecked}) {
    const [checked, setChecked] = useState(false);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(firstTitle);
    const [text, setText] = useState(firstText);
    const checkboxRef = useRef(null);
    const [saveText, setSaveText] = useState(firstText);
    const [saveTitle, setSaveTitle] = useState(firstTitle);
    const baseStyle="borderBox";
    const alternativeStyle= "yellowBox";

    useEffect(() => {
        cancelButton();
    }, [viewOnlyChecked]);

    function changeCheckbox() {
        setChecked((check) => !check);
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function textChangeHandler(event) {
        setText(event.target.value);
    }

    function setSaveInf() {
        setSaveTitle(title);
        setSaveText(text);
    }

    function submitHandler() {
        setEditing(false);
    }

    function cancelButton() {
        setTitle(saveTitle);
        setText(saveText);
        setEditing(false);
    }

    function editingHandler() {
        setSaveInf();
        setChecked(false);
        setEditing(true);
    }

    return (
        editing ? (
            <div className="card">
                <div className={checked ? alternativeStyle : baseStyle} id='divTitle'>
                    <h2>
                        <input type='text' onChange={titleChangeHandler} value={title} style={{width: 110}}/>
                    </h2>
                    <button
                        onClick={cancelButton}
                        className="cancelButton">Cancel <MdOutlineCancel/>
                    </button>
                    <button
                        onClick={submitHandler}
                        className="editButton">
                        Save<FaSave/>
                    </button>
                </div>
                <div className={checked ? alternativeStyle + ' textDiv' : baseStyle + ' textDiv'}>
                    <textarea onChange={textChangeHandler} className="textAreaBox" value={text}/>
                </div>
            </div>
        ) : (
            <div className="card">
                <div className={checked ? alternativeStyle : baseStyle} id='divTitle'>
                    <h2>
                        {title}
                    </h2>
                    <input type="checkbox" ref={checkboxRef} className="check1" onChange={changeCheckbox}/>
                    <div style={{width:80}}>
                        {viewOnlyChecked &&
                            <button
                                onClick={editingHandler}
                                className="editButton">
                                Edit<AiOutlineEdit/>
                            </button>
                        }
                    </div>
                </div>
                <div className={checked ? alternativeStyle + ' textDiv': baseStyle + ' textDiv'} >{text}</div>
            </div>)
    )
}


export default Card;
