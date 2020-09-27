import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE, 
    ADD_USER 
} from "../action-types/userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case ADD_USER:
            const users = state.users.concat(action.payload)
            return {...state, users}
        default: return state
    }
}

export default reducer