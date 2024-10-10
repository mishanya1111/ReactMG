import { MdOutlineCancel } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';
import CastomDiv from './CastomDiv';

function CardHeader({
    value,
    inputChange,
    onCansel,
    onSave,
    onChange,
    onEdit,
    checked,
    editing,
    isDisableMode
}) {
    return editing ? (
        <CastomDiv $checked={checked} $title={true}>
            <h2>
                <input
                    type="text"
                    onChange={inputChange}
                    value={value}
                    style={{ width: 110 }}
                />
            </h2>
            <button onClick={onCansel} className="cancelButton">
                Cancel
                <MdOutlineCancel />
            </button>
            <button onClick={onSave} className="cardButton">
                Save
                <FaSave />
            </button>
        </CastomDiv>
    ) : (
        <CastomDiv $checked={checked} $title={true}>
            <h2>{value}</h2>
            <input type="checkbox" className="check1" onChange={onChange} />
            <div style={{ width: 80 }}>
                {!isDisableMode && (
                    <button onClick={onEdit} className="cardButton">
                        Edit
                        <AiOutlineEdit />
                    </button>
                )}
            </div>
        </CastomDiv>
    );
}

export default CardHeader;
