import { NavLink } from 'react-router-dom'
export function AppHeader() {

    return (
        <header className="app-header">
            <h1>Mister Toys</h1>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/about">About</NavLink> |
                <NavLink to="/toy">Toys</NavLink> |
                {/* <a href="#" onClick={onToggleCart}>
                    🛒 Cart
                </a> */}
            </nav>
        </header>
    )
}

