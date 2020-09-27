import axios from 'axios'
import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER 
} from "../action-types/userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const addUserSuccess = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}

// export const addUser = userObj => {
//     return (dispatch) => {
//         axios.post('https://petstore.swagger.io/v2/user', {userObj})
//         .then(response => {
//             const user = response.data;
//             dispatch(addUserSuccess(user))
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }
// }


//redundant no need
export const addUser = userObj => {
    return (dispatch) => {
        fetch('https://petstore.swagger.io/v2/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(res => res.json())
    }
}