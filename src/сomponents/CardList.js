import Card from './Card';

import { CardContext } from '../context/сardArrayContext';
import { useContext } from 'react';


function CardList() {
    const { items, errorFetch, fetchingDate } = useContext(CardContext);
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
                {errorFetch && <h1 style={{ color: 'red' }}>{errorFetch.message}</h1>}
                {!errorFetch &&
                  items.map(card => (
                    <Card
                      firstTitle={card.title}
                      firstText={card.text}
                      key={card.id}
                      id={card.id}
                    />
                  ))
                }
            </>
          )}
      </>
    );
}

export default CardList;
