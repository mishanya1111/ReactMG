import Card from './Card'



function CardList({onChecked,checkBoxChange,items}) {
    return(
        <>
            {items.map((card) =>
                <Card
                    viewOnlyChecked={onChecked}
                    firstTitle={card.title}
                    firstText={card.text}
                    key={card.id}
                    id={card.id}
                    checkBoxChange={checkBoxChange}
                />
            )
            }
        </>
    )
}

export default CardList;