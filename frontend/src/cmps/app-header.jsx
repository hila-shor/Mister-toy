import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { logout} from '../store/user.action.js'
import logoImg from'../assets/img/logo-removebg-preview.png'

export function AppHeader() {
    const user = useSelector((storeState => storeState.userModule.user))
    console.log(user)

    function onLogout() {
        logout()
            .then(() => {
                user=(null)
            })
    }

    return (
        <header className="app-header main-layout full ">
            <div className="flex header-wrapper">
                <img className="ratio-16-9 " alt='' src={logoImg}/>
                <nav>
                    <NavLink to="/">Home</NavLink> |
                    <NavLink to="/about">About</NavLink> |
                    <NavLink to="/toy">Toys</NavLink> |
                    <NavLink to="/dashboard">Dashboard</NavLink> 
                    {!user && <NavLink className="login-signup" to="/login-signup">Login / Singup</NavLink>}
                    {user && <button onClick={onLogout}>hi {user.fullname}/Logout</button>}
                </nav>
            </div>
        </header>
    )
}

