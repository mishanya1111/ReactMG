import Card from './Card';
import { useSelector } from 'react-redux';

function CardList() {
    const { cards, error } = useSelector((state) => state.counter);

    return (
        <>
            {error ? (
                <h1 style={{ color: 'red' }}>{error.message}</h1>
            ) : (
                cards.map((card) => (
                    <Card
                        firstTitle={card.title}
                        firstText={card.text}
                        key={card.id}
                        id={card.id}
                    />
                ))
            )}
        </>
    );
}

export default CardList;
