import {MdOutlineCancel} from "react-icons/md";
import {FaSave} from "react-icons/fa";
import {AiOutlineEdit} from "react-icons/ai";
import {useState, useEffect} from "react";

function CardHeader({
                        editing,
                        checked,
                        viewOnlyChecked,
                        alternativeStyle,
                        baseStyle,
                        firstTitle,
                        setCanselTemp,
                        setEditing,
                        setChecked
                    }) {
    const [title, setTitle] = useState(firstTitle);
    const [saveTitle, setSaveTitle] = useState(firstTitle);

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function cancelButton() {
        setTitle(saveTitle);
        setEditing(false);
        setCanselTemp(true);
    }

    function submitHandler() {
        setEditing(false);
    }

    function editingHandler() {
        setSaveTitle(title);
        setChecked(false);
        setEditing(true);
    }

    function changeCheckbox() {
        setChecked((check) => !check);
    }

    useEffect(() => {
        if (!editing) {
            setSaveTitle(title);
        }
    }, [editing]);


    useEffect(() => {
        cancelButton();
    }, [viewOnlyChecked]);

    return (
        editing ? (
            <div className={checked ? alternativeStyle : baseStyle} id='divTitle'>
                <h2>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        value={title}
                        style={{width: 110}}/>
                </h2>
                <button
                    onClick={cancelButton}
                    className="cancelButton">Cancel<MdOutlineCancel/>
                </button>
                <button
                    onClick={submitHandler}
                    className="editButton">
                    Save<FaSave/>
                </button>
            </div>

        ) : (
            <div className={checked ? alternativeStyle : baseStyle} id='divTitle'>
                <h2>
                    {title}
                </h2>
                <input type="checkbox" className="check1" onChange={changeCheckbox}/>
                <div style={{width: 80}}>
                    {!viewOnlyChecked &&
                        <button
                            onClick={editingHandler}
                            className="editButton">
                            Edit<AiOutlineEdit/>
                        </button>
                    }
                </div>
            </div>
        )
    )
}

export default CardHeader;
