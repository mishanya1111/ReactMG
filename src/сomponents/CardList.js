import Card from './Card';
import withLoadingDelay from '../hooks/withLoadingDelay';
import { CardContext } from '../context/сardArrayContext';
import { useContext } from 'react';

const CardWithLoading = withLoadingDelay(Card);
function CardList() {
    const { items, errorFetch, fetchingDate } = useContext(CardContext);
    return (
        <>
            {fetchingDate &&
              <div className="preloader">
                <div className="preloader__row">
                    <div className="preloader__item"></div>
                    <div className="preloader__item"></div>
                </div>
            </div>}
            {!fetchingDate && errorFetch && <h1 style={{ color: 'red' }}>The data was not fetch</h1>}
            {!fetchingDate &&  !errorFetch &&
                items.map(card => (
                    <CardWithLoading
                        firstTitle={card.title}
                        firstText={card.text}
                        key={card.id}
                        id={card.id}
                    />
                ))}
        </>
    );
}

export default CardList;
