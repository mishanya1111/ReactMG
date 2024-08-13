import './first.css';
import {useState, useRef} from "react";
import {MdOutlineCancel} from "react-icons/md";
import {FaSave} from "react-icons/fa";
import {AiOutlineEdit} from "react-icons/ai";

function Card({baseStyle, alternativeStyle, firstTitle, firstText}) {
    const [checkState_, setCheckState] = new useState(false);
    const [editing, setEditing] = new useState(false);
    const [title, setTitle] = new useState(firstTitle);
    const [text, setText] = new useState(firstText);
    const checkboxRef = useRef(null);
    const [saveInf, editSaveInf] = useState({
        title: title,
        text: text
    })

    function changeCheckbox() {
        setCheckState((check) => !check);
    }

    function changeEditing() {
        setEditing((edit) => !edit);
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function textChangeHandler(event) {
        setText(event.target.value);
    }

    function setSaveInf() {
        editSaveInf({
            ...saveInf,
            title: title,
            text: text,
        })
    }

    function cancelButton() {
        setTitle(saveInf.title);
        setText(saveInf.text);
        changeEditing();
    }

    function editingHandler() {

        if (!editing) {
            setSaveInf();
            if (checkState_) {
                setCheckState();
            }
        } else {
        }
        changeEditing();
    }

    return (
        <div className="card">
            <div className={checkState_ ? alternativeStyle : baseStyle} id='divTitle'>
                <h2
                    style={{width: 50}}>
                    {editing ?
                        <input type='text' onChange={titleChangeHandler} value={title} style={{width: 110}}/>
                        : title}
                </h2>
                {editing ? <button
                    onClick={cancelButton}
                    className="cancelButton">Cancel <MdOutlineCancel/>
                </button> : <input type="checkbox" ref={checkboxRef} className="check1" onChange={changeCheckbox}/>}
                <button
                    onClick={editingHandler}
                    className="editButton">{editing ? <>Save<FaSave/></> : <>Edit<AiOutlineEdit/> </>}
                </button>
            </div>
            <p className={checkState_ ? alternativeStyle : baseStyle}>
                {editing ?
                    <textarea onChange={textChangeHandler} className="textAreaBox" value={text}/>
                    : text}
            </p>
        </div>);
}


export default Card;
