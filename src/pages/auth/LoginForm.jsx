import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'
import { LOGIN } from '../../reducers/AuthReducer'

const LoginForm = () => {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const { state: locationState } = useLocation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        dispatch({ type: LOGIN })
        navigate(locationState?.from?.pathname || '/')
    }

    return (
        <div>
            <h1>Login</h1>

            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={onSubmit}>Se connecter</button>
        </div>
    )
}

export default LoginForm