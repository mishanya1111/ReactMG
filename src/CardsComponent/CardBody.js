function CardBody({
                      editing,
                      checked,
                      value,
                      onChange,
                  }) {

    return (
        editing ? (
            <div className={checked ? 'yellowBox textDiv' : 'borderBox textDiv'}>
                <textarea onChange={onChange} className="textAreaBox" value={value}/>
            </div>
        ) : (
            <div className={checked ? 'yellowBox textDiv' : 'borderBox textDiv'}>
                {value}
            </div>)
    )
}

export default CardBody;