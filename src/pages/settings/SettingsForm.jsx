import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { LOGOUT } from '../../reducers/AuthReducer'

const SettingsForm = () => {
    const { dispatch } = useContext(AuthContext)

    return (
        <div>
            <h1>Settings</h1>
            <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
        </div>
    )
}

export default SettingsForm