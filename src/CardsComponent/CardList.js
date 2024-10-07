import Card from './Card';
import withLoadingDelay from './withLoadingDelay';
import { CardContext } from './contextCardList';
import { useContext } from 'react';

const CardWithLoading = withLoadingDelay(Card);
function CardList() {
    const { items } = useContext(CardContext);
    return (
        <>
            {items.map(card => (
                <CardWithLoading
                    //viewOnlyChecked={viewOnlyCheckBoxClick}
                    firstTitle={card.title}
                    firstText={card.text}
                    key={card.id}
                    id={card.id}
                    //checkBoxChange={checkBoxChange}
                />
            ))}
        </>
    );
}

export default CardList;
