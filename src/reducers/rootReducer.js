import { combineReducers } from "redux"
import userReducer from './userReducer'
import freightFormReducer from './freightFormReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    user: userReducer,
    freightData: freightFormReducer,
    form: formReducer
})

export default rootReducer