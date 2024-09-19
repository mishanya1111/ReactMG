function CardBody({
                      editing,
                      checked,
                      alternativeStyle,
                      baseStyle,
                      value,
                      onChange,
                  }) {

    return (
        editing ? (
            <div className={checked ? alternativeStyle + ' textDiv' : baseStyle + ' textDiv'}>
                <textarea onChange={onChange} className="textAreaBox" value={value}/>
            </div>
        ) : (
            <div className={checked ? alternativeStyle + ' textDiv' : baseStyle + ' textDiv'}>
                {value}
            </div>)
    )
}

export default CardBody;