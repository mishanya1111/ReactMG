import '../first.css';
import {useState,useEffect} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

function Card({
                  firstTitle,
                  firstText,
                  viewOnlyChecked,
                  setArrayOfDeleteKeys,
                  id
              }) {
    const [checked, setChecked] = useState(false);
    const [editing, setEditing] = useState(false);
    const baseStyle = "borderBox";
    const alternativeStyle = "yellowBox";
    const [canselTemp, setCanselTemp] = useState(firstTitle);

    useEffect(() => {
        if (checked) {
            setArrayOfDeleteKeys(prev => [...prev, id]);
        } else {
            setArrayOfDeleteKeys(prev => prev.filter(key => key !== id));
        }
    }, [checked, id, setArrayOfDeleteKeys]);

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
                setChecked={setChecked}
                //num={this.key}
                //arrayOfDeleteKeys={arrayOfDeleteKeys}
                //setArrayOfDeleteKeys={setArrayOfDeleteKeys}
            />
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
