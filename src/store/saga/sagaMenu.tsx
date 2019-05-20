import { put } from 'redux-saga/effects'
import { ADD_LIST_DATA, REMOVE_LIST_DATA, EDIT_LIST_DATA } from '../actionTypes'
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
export default {
    addList,
    delList,
    editList
}