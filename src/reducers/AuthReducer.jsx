export const initState = {
    isLogged: false,
}

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

export const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged: true,
            }
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
            }
        default:
            return initState
    }
}