import { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

export const NavBar = () => {

    const history = useHistory()

    const auth = useContext(AuthContext)

    const logoutHandler = Event => {
        Event.preventDefault()
        auth.logout()
        history.pushState('/')
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Сокращение ссылок</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to = "/create">Создать</NavLink></li>
                    <li><NavLink to = "/create">Создать</NavLink></li>
                    <li><a href ="/" onClick = {logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}