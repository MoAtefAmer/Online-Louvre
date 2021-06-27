import {combineReducers} from 'redux';
import loginReducer from './login.reducer'
import artReducer from './art.reducer'
import adminReducer from './admin.reducer'


const rootReducer = combineReducers({
    loginReducer,
    artReducer,
    adminReducer,

})

export default rootReducer;