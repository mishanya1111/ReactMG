import Card from './Card'
import {useState,useEffect} from "react";
import cardsData from '../data';


function CardList({checked,boolDeleteSelectedCards,setBoolDeleteSelectedCards}) {
    const [arrayOfDeleteKeys, setArrayOfDeleteKeys] = useState([]);
    const [currentCardsData, setCurrentCardsData] = useState(cardsData);

    function handleDeleteSelectedCards() {
        const filteredCards = currentCardsData.filter(card => !arrayOfDeleteKeys.includes(card.id));
        setCurrentCardsData(filteredCards);
        setArrayOfDeleteKeys([]);
    }

    const arrayCards = currentCardsData.map((card) =>
        <Card
            viewOnlyChecked={checked}
            firstTitle={card.title}
            firstText={card.text}
            key={card.id}
            id={card.id}
            setArrayOfDeleteKeys={setArrayOfDeleteKeys}
        />
    );
    useEffect(() => {
        setBoolDeleteSelectedCards(false);
        handleDeleteSelectedCards();
    }, [boolDeleteSelectedCards,setBoolDeleteSelectedCards]);
    return(
        <>
            {arrayCards}
        </>
    )
}

export default CardList;