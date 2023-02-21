import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import{userService} from '../services/user.service.js'
import { signup, login, logout} from '../store/user.action.js'
import { SET_USER } from '../store/user.reducer.js'



export function LoginSignup(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function setUser(user) {
        dispatch({ type: SET_USER, user })
    }


    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    console.log(credentials)
    const [isSignupState, setIsSignupState] = useState(false)

    function handleCredentialsChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
    }


    function onSubmit(ev) {
        ev.preventDefault();
        if (isSignupState) {
            signup({ ...credentials, fullname: credentials.fullname })
            .then(() => {
                // showSuccessMsg(`Welcome ${credentials.username}`)
                navigate('/')
            })
            .catch(err => {
                showErrorMsg('OOps try again')
            });
        } else {
            login(credentials)
            .then(() => {
                // showSuccessMsg(`Welcome ${credentials.username}`)
                navigate('/')
            })
            .catch(err => {
                showErrorMsg('OOps try again')
            });
        }
    }
    

    function onToggleSignupState(ev) {
        ev.preventDefault()
        setIsSignupState(!isSignupState)
    }
    return (
        <section className="login-signup main-layout">
            <div className="login-page">
                <form className="login-form grid " onSubmit={onSubmit}>
                    <input
                        className="custom-placeholder"
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleCredentialsChange}
                        required
                        autoFocus
                    />

                    <input
                        className="custom-placeholder"
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleCredentialsChange}
                        required
                    />

                    {isSignupState && <input
                        className="custom-placeholder"
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Full name"
                        onChange={handleCredentialsChange}
                        required
                    />}

                    <button>{isSignupState ? 'Signup' : 'Login'}</button>
                    
                    <a href="#" onClick={onToggleSignupState}>
                        {isSignupState ? 'Already a member? Login' : 'New user? Signup here'}
                    </a >
                </form>
            </div >
        </section>
    )
}