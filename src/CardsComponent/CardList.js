import Card from './Card';
import withLoadingDelay from './withLoadingDelay';
import {CardContext} from './contextCardList'
const CardWithLoading = withLoadingDelay(Card);
function CardList({ onChecked, checkBoxChange, items }) {
    return (
        <CardContext.Provider>
            {items.map(card => (
                <CardWithLoading
                    viewOnlyChecked={onChecked}
                    firstTitle={card.title}
                    firstText={card.text}
                    key={card.id}
                    id={card.id}
                    checkBoxChange={checkBoxChange}
                />
            ))}
        </CardContext.Provider>
    );
}

export default CardList;
