import { put, takeEvery } from 'redux-saga/effects'
import { REQ_LIST_DATA, ADD_LIST_DATA } from './actionTypes'
function* addList(action: any) {
    const todos = action.todos
    yield put({
        type: ADD_LIST_DATA,
        todos
    })
}
function* mySagas():any {
    yield takeEvery(REQ_LIST_DATA, addList)
}
export default mySagas;