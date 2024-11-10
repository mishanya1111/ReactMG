import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={`/`}
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
                            to={`/cards`}
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
    )
}