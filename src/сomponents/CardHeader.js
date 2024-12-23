import { MdOutlineCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import CustomDiv from "./CustomDiv";

function CardHeader({
                        value,
                        inputChange,
                        onCancel,
                        onSave,
                        onChange,
                        onEdit,
                        isActive,
                        editing,
                        isDisableMode,
                    }) {
    return editing ? (
        <CustomDiv $checked={isActive} $title={true}>
            <h2>
                <input
                    type="text"
                    onChange={inputChange}
                    value={value}
                    style={{ width: 110 }}
                />
            </h2>
            <button onClick={onCancel} className="cancelButton">
                Cancel
                <MdOutlineCancel />
            </button>
            <button onClick={onSave} className="cardButton">
                Save
                <FaSave />
            </button>
        </CustomDiv>
    ) : (
        <CustomDiv $checked={isActive} $title={true}>
            <h2>{value}</h2>
            <input
                type="checkbox"
                className="check1"
                onChange={onChange}
                checked={isActive}
                disabled={editing}
            />
            <div style={{ width: 80 }}>
                {!isDisableMode && (
                    <button onClick={onEdit} className="cardButton">
                        Edit
                        <AiOutlineEdit />
                    </button>
                )}
            </div>
        </CustomDiv>
    );
}

export default CardHeader;
