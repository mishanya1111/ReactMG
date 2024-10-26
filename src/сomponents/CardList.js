import Card from './Card';

import { CardContext } from '../context/сardArrayContext';
import { useContext } from 'react';

function CardList() {
    const { items, error, fetchingDate } = useContext(CardContext);
    return (
        <>
            {fetchingDate ? (
                <div className="preloader">
                    <div className="preloader__row">
                        <div className="preloader__item"></div>
                        <div className="preloader__item"></div>
                    </div>
                </div>
            ) : (
                <>
                    {error && <h1 style={{ color: 'red' }}>{error.message}</h1>}
                    {!error &&
                        items.map(card => (
                            <Card
                                firstTitle={card.title}
                                firstText={card.text}
                                key={card.id}
                                id={card.id}
                            />
                        ))}
                </>
            )}
        </>
    );
}

export default CardList;
