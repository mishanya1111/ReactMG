import Card from "./Card";
import withLoadingDelay from "../withLoadingDelay";
const CardWithLoading = withLoadingDelay(Card);
function CardList({ onChecked, checkBoxChange, items }) {
  return (
    <>
      {items.map(card => (<CardWithLoading
        viewOnlyChecked={onChecked}
        firstTitle={card.title}
        firstText={card.text}
        key={card.id}
        id={card.id}
        checkBoxChange={checkBoxChange}
      />))}
    </>);
}

export default CardList;
