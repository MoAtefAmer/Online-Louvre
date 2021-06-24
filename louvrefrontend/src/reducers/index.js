import {combineReducers} from 'redux';
import loginReducer from './login.reducer'
import artReducer from './art.reducer'



const rootReducer = combineReducers({
    loginReducer,
    artReducer,
})

export default rootReducer;