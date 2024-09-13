import './first.css';
import {useState} from "react";
import CardHeader from "./CardsComponent/CardHeader";
import CardBody from "./CardsComponent/CardBody";

function Card({firstTitle, firstText, viewOnlyChecked}) {
    const [checked, setChecked] = useState(false);
    const [editing, setEditing] = useState(false);
    const baseStyle = "borderBox";
    const alternativeStyle = "yellowBox";
    const [canselTemp, setCanselTemp] = useState(firstTitle);

    return (
        <div className="card">
            <CardHeader
                editing={editing}
                checked={checked}
                viewOnlyChecked={viewOnlyChecked}
                alternativeStyle={alternativeStyle}
                baseStyle={baseStyle}
                firstTitle={firstTitle}
                setCanselTemp={setCanselTemp}
                setEditing={setEditing}
                setChecked={setChecked}/>
            <CardBody
                editing={editing}
                checked={checked}
                alternativeStyle={alternativeStyle}
                baseStyle={baseStyle}
                firstText={firstText}
                setCanselTemp={setCanselTemp}
                canselTemp={canselTemp}
            />
        </div>
    )

}


export default Card;
