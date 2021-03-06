import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtool-extension'
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'

const store = createStore(
    rootReducer,
    applyMiddleware(logger,thunk)
)

export default store