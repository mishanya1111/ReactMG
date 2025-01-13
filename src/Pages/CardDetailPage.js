import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateCard } from '../store/cardArraySlice';

export default function CardDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cards, viewOnlyMod } = useSelector(state => state.counter);
    const card = cards.find(card => card.id === id);
    const [title, setTitle] = useState(card?.title || '');
    const [text, setText] = useState(card?.text || '');

    if (!card) {
        return <h1 className="not-found">Card not found</h1>;
    }

    const saveHandler = () => {
        dispatch(updateCard({ id, title, text }));
        navigate('/');
    };

    return (
        <div id="detail-card-page">
            <div className="detail-container">
                <h1>Card Details</h1>
                <div className="detail-field">
                    <label>
                        Title:
                        {viewOnlyMod ? (
                            <div> {title}</div>
                        ) : (
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="detail-input"
                            />
                        )}
                    </label>
                </div>
                <div className="detail-field">
                    <label>
                        Text:
                        {viewOnlyMod ? (
                            <div> {text}</div>
                        ) : (
                            <textarea
                                value={text}
                                onChange={e => setText(e.target.value)}
                                className="detail-textarea"
                            />
                        )}
                    </label>
                </div>
                {!viewOnlyMod && (
                    <div className="detail-buttons">
                        <button onClick={saveHandler} className="detail-button save">
                            Save
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="detail-button cancel"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
