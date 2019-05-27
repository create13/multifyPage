import { put } from 'redux-saga/effects'
import { LOADING_STATUS } from '../actionTypes'
function* changeLoading(action: any) {
    console.log('sagaLoding', 'sagaLoding');
    const todos = action.todos
    yield put({
        type: LOADING_STATUS,
        todos
    })
}
export default {
    changeLoading
}