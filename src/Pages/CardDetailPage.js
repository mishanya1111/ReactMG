import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeActiveById } from '../store/cardArraySlice';

export default function CardDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const card = useSelector((state) =>
        state.counter.cards.find((card) => card.id === id)
    );

    const [title, setTitle] = useState(card?.title || '');
    const [text, setText] = useState(card?.text || '');

    if (!card) {
        return <h1>Card not found</h1>;
    }

    const saveHandler = () => {
        dispatch(
            changeActiveById({
                id,
                changes: { title, text }
            })
        );
        navigate('/');
    };

    return (
        <div>
            <h1>Card Details</h1>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Text:
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={saveHandler}>Save</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    );
}
