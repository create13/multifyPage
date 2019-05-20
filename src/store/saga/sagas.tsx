import { put, takeEvery } from 'redux-saga/effects'
import { REQ_LIST_DATA, REQ_REMOVE_DATA, REQ_EDIT_DATA } from '../actionTypes'
import sagaFun from './sagaMenu'
function* mySagas():any {
    yield takeEvery(REQ_LIST_DATA, sagaFun.addList)
    yield takeEvery(REQ_REMOVE_DATA, sagaFun.delList)
    yield takeEvery(REQ_EDIT_DATA, sagaFun.editList)
}
export default mySagas;