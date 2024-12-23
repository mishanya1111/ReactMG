import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveById, updateCard, resetActive } from "../store/cardArraySlice";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { useNavigate } from "react-router-dom";

function Card({ firstTitle, firstText, id }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { viewOnlyMod } = useSelector((state) => state.counter);
    const card = useSelector((state) =>
        state.counter.cards.find((card) => card.id === id)
    );

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(firstTitle);
    const [text, setText] = useState(firstText);

    const handleDoubleClick = () => {
        navigate(`/card/${id}`);
    };

    const handleCheckboxChange = () => {
        if (!editing) {
            dispatch(changeActiveById(id));
        }
    };

    const handleEdit = () => {
        if (card.isActive) {
            dispatch(resetActive(id));
        }
        setEditing(true);
    };

    const handleCancel = () => {
        setTitle(card.title);
        setText(card.text);
        setEditing(false);
    };

    const handleSave = () => {
        dispatch(updateCard({ id, title, text }));
        setEditing(false);
    };

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleTextChange = (e) => setText(e.target.value);

    return (
        <div className="card" onDoubleClick={handleDoubleClick}>
            <CardHeader
                value={title}
                inputChange={handleTitleChange}
                onCancel={handleCancel}
                onSave={handleSave}
                onChange={handleCheckboxChange}
                isActive={card.isActive}
                editing={editing}
                isDisableMode={viewOnlyMod}
                onEdit={handleEdit}
            />
            <CardBody
                editing={editing}
                value={text}
                onChange={handleTextChange}
                checked={card.isActive}
            />
        </div>
    );
}


export default Card;
