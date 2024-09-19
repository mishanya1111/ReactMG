import '../first.css';
import {useState,useEffect} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
function Card({
                  firstTitle,
                  firstText,
                  viewOnlyChecked,
                  id,
                  checkBoxChange
              }) {

    const [checked, setChecked] = useState(false);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(firstTitle);
    const [text, setText] = useState(firstText);
    const [saveText, setSaveText] = useState(firstText);
    const [saveTitle, setSaveTitle] = useState(firstTitle);
    const baseStyle="borderBox";
    const alternativeStyle= "yellowBox";

    useEffect(() => {
        cancelButton();
    }, [viewOnlyChecked]);

    function changeCheckbox() {
        setChecked((check) => !check);
        checkBoxChange(id);
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
        setSaveInf();
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
        <div className="card">
            <CardHeader
                value={title}
                inputChange={titleChangeHandler}
                onCansel={cancelButton}
                onSave={submitHandler}
                onChange={changeCheckbox}
                checked={checked}
                editing={editing}
                isDisableMode={viewOnlyChecked}
                alternativeStyle={alternativeStyle}
                baseStyle={baseStyle}
                onEdit={editingHandler}
            />
            <CardBody
                editing={editing}
                checked={checked}
                alternativeStyle={alternativeStyle}
                baseStyle={baseStyle}
                value={text}
                onChange={textChangeHandler}

            />
        </div>
    )

}


export default Card;
