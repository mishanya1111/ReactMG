import {useEffect, useState} from "react";

function CardBody({checked, alternativeStyle, baseStyle, firstText, editing, setCanselTemp, canselTemp}) {
    const [text, setText] = useState(firstText);
    const [saveText, setSaveText] = useState(firstText);

    function textChangeHandler(event) {
        setText(event.target.value);
    }

    useEffect(() => {
        if (editing) {
            setSaveText(text);
        }
    }, [editing]);

    useEffect(() => {
        setCanselTemp(false);
        setText(saveText);
    }, [canselTemp]);


    return (
        editing ? (
            <div className={checked ? alternativeStyle + ' textDiv' : baseStyle + ' textDiv'}>
                <textarea onChange={textChangeHandler} className="textAreaBox" value={text}/>
            </div>
        ) : (
            <div className={checked ? alternativeStyle + ' textDiv' : baseStyle + ' textDiv'}>
                {text}
            </div>)
    )
}

export default CardBody;