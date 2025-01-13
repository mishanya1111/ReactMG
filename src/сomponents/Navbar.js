import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/authenticationSlice';

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username, role } = useSelector(state => state.authentication);
    function logOutHandler() {
        dispatch(logOut());
        navigate('/login');
    }
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        {/*здесь остался a чтобы стили не переписывать*/}
                        {role ? (
                            <a onClick={() => logOutHandler()}> Log out</a>
                        ) : (
                            <NavLink
                                to={`/login`}
                                end
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active' : isPending ? 'pending' : ''
                                }
                            >
                                Login In
                            </NavLink>
                        )}
                    </li>
                    <li>
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isActive ? 'active' : isPending ? 'pending' : ''
                            }
                        >
                            Cards
                        </NavLink>
                    </li>
                    {role === 'admin' && (
                        <li>
                            <NavLink
                                to={`/settings`}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active' : isPending ? 'pending' : ''
                                }
                            >
                                Settings
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
            {username && (
                <div className="navbar-username">
                    Hello <b>{username.split('@')[0]}</b>
                </div>
            )}
        </div>
    );
}
