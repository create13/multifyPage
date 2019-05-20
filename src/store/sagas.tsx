import { put, takeEvery } from 'redux-saga/effects'
import { REQ_LIST_DATA, ADD_LIST_DATA, REQ_REMOVE_DATA, REMOVE_LIST_DATA, REQ_EDIT_DATA, EDIT_LIST_DATA } from './actionTypes'
function* addList(action: any) {
    const todos = action.todos
    yield put({
        type: ADD_LIST_DATA,
        todos
    })
}
function* delList(action: any) {
    const item = action.item
    yield put({
        type: REMOVE_LIST_DATA,
        item
    })
}
function* editList(action: any) {
    const menu = action.menu
    yield put ({
        type: EDIT_LIST_DATA,
        menu
    })
}
function* mySagas():any {
    yield takeEvery(REQ_LIST_DATA, addList)
    yield takeEvery(REQ_REMOVE_DATA, delList)
    yield takeEvery(REQ_EDIT_DATA, editList)
}
export default mySagas;