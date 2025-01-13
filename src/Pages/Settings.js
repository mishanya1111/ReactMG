import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeViewMode } from '../store/cardArraySlice';
import { useEffect } from 'react';
import styled from 'styled-components';

const InputViewOnly = styled.input`
    &:hover {
        scale: 2;
    }
`;
export default function Settings() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { viewOnlyMod } = useSelector(state => state.counter);
    const { role } = useSelector(state => state.authentication);
    useEffect(() => {
        console.log(role);
        if (role !== 'admin') {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <div className="checkboxView">
                <InputViewOnly
                    type="checkbox"
                    onChange={() => dispatch(changeViewMode())}
                    id="checboxView"
                    className="checkboxView"
                    checked={viewOnlyMod}
                />
                <label htmlFor="checboxView">View only</label>
            </div>
        </div>
    );
}
