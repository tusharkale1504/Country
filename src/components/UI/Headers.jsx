import { NavLink } from "react-router-dom"

const Headers = () => {
    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">

                    <div className="Logo">
                        <NavLink to="/">
                            <h1 className="world">WorldAtlas</h1>
                        </NavLink>
                    </div>
                    <nav>
                        <ul >
                            <li className="header-list"><NavLink to="/">Home</NavLink></li>
                            <li className="header-list"><NavLink to="/about">About</NavLink></li>
                            <li className="header-list"><NavLink to="/country">Country</NavLink></li>
                            <li className="header-list"><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Headers