import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeActiveById
} from '../store/cardArraySlice';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function Card({ firstTitle, firstText, id }) {
    const dispatch = useDispatch();
    const { viewOnlyMod } = useSelector((state) => state.counter);

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(firstTitle);
    const [text, setText] = useState(firstText);
    const navigate = useNavigate();

    const handleDoubleClick = () => {
        navigate(`/card/${id}`);
    };
    function changeCheckbox() {
        dispatch(changeActiveById(id));
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function textChangeHandler(event) {
        setText(event.target.value);
    }

    function submitHandler() {
        setEditing(false);
    }

    function cancelButton() {
        setEditing(false);
    }

    function editingHandler() {
        setEditing(true);
    }

    return (
        <div className="card" onDoubleClick={handleDoubleClick}>
            <CardHeader
                value={title}
                inputChange={titleChangeHandler}
                onCansel={cancelButton}
                onSave={submitHandler}
                onChange={changeCheckbox}
                editing={editing}
                isDisableMode={viewOnlyMod}
                onEdit={editingHandler}
            />
            <CardBody
                editing={editing}
                value={text}
                onChange={textChangeHandler}
            />
        </div>
    );
}

Card.propTypes = {
    firstTitle: PropTypes.string,
    firstText: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Card;
