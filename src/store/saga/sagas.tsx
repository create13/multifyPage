import { takeEvery } from 'redux-saga/effects'
// REQ_LANGUAGE
import { REQ_LIST_DATA, REQ_REMOVE_DATA, REQ_LOADING } from '../actionTypes'
import sagaMenu from './sagaMenu' // 菜单栏
import globalPromp from './globalPromp' // 全局配置
function* mySagas():any {
    console.log('进入saga', '进入saga');
    yield takeEvery(REQ_LIST_DATA, sagaMenu.addList)
    yield takeEvery(REQ_REMOVE_DATA, sagaMenu.delList)
    yield takeEvery(REQ_LOADING, globalPromp.changeLoading)
}
export default mySagas;