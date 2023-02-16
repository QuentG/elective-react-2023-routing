import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Layout = () => {
    const { state } = useContext(AuthContext)

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                    {state.isLogged && (
                        <li>
                            <NavLink to='/settings'>Settings</NavLink>
                        </li>
                    )}
                </ul>
            </nav>

            <hr />
            <Outlet />
        </div>
    )
}

export default Layout