import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={`/login`}
                            end
                            className={({ isActive, isPending }) =>
                                isActive ? 'active' : isPending ? 'pending' : ''
                            }
                        >
                            Login In
                        </NavLink>
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
                </ul>
            </nav>
        </div>
    );
}
