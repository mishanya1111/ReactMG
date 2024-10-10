import CastomDiv from './CastomDiv';

function CardBody({ editing, checked, value, onChange }) {
    return editing ? (
        <CastomDiv $checked={checked}>
            <textarea onChange={onChange} className="textAreaBox" value={value} />
        </CastomDiv>
    ) : (
        <CastomDiv $checked={checked}>{value}</CastomDiv>
    );
}

export default CardBody;
