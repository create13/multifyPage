import { combineReducers } from 'redux'
import operationList from './operationList';
import editList from './editList'
const rootReducer = combineReducers({
    operationList,
    editList
});
export default rootReducer;