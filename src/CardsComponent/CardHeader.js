import {MdOutlineCancel} from "react-icons/md";
import {FaSave} from "react-icons/fa";
import {AiOutlineEdit} from "react-icons/ai";

function CardHeader({
                        value,
                        inputChange,
                        onCansel,
                        onSave,
                        onChange,
                        onEdit,
                        checked,
                        editing,
                        isDisableMode,
                        alternativeStyle,
                        baseStyle,
                    }) {
    return (
        editing ? (
            <div className={checked ? alternativeStyle : baseStyle} id='divTitle'>
                <h2>
                    <input
                        type='text'
                        onChange={inputChange}
                        value={value}
                        style={{width: 110}}/>
                </h2>
                <button
                    onClick={onCansel}
                    className="cancelButton">Cancel<MdOutlineCancel/>
                </button>
                <button
                    onClick={onSave}
                    className="cardButton">
                    Save<FaSave/>
                </button>
            </div>

        ) : (
            <div className={checked ? alternativeStyle : baseStyle} id='divTitle'>
                <h2>
                    {value}
                </h2>
                <input type="checkbox" className="check1" onChange={onChange}/>
                <div style={{width: 80}}>
                    {!isDisableMode && (
                        <button
                            onClick={onEdit}
                            className="cardButton">
                            Edit<AiOutlineEdit/>
                        </button>
                    )
                    }
                </div>
            </div>
        )
    )
}

export default CardHeader;
