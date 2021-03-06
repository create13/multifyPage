import { LOADING_STATUS, LANGUAGE_STORAGE, CHANGE_MENU_LIST, STORAGE_FIRST_ID, CHANGE_MENU_STATUS, DEFAULT_SELECT_FIRST, DEFAULT_HEADER_STATUS } from '../actionTypes'
import defaultState from '../defaultState'
export default (state: any = defaultState.globalState, action: any) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === LOADING_STATUS) {
        newState.maskStatus = action.status
        return newState;
    } else if (action.type === LANGUAGE_STORAGE) {
        newState.lanStorage = action.data
        return newState;
    } else if (action.type === CHANGE_MENU_LIST) {
        newState.menuList = action.menu;
        return newState;
    } else if (action.type === STORAGE_FIRST_ID) {
        if (typeof action.id === 'string') {
            newState.defaultId.push(action.id);
        } else if (typeof action.id === 'object') {
            newState.defaultId = [];
        }
        return newState;
    } else if (action.type === CHANGE_MENU_STATUS) {
        newState.menuStatus = action.status
        return newState;
    } else if (action.type === DEFAULT_SELECT_FIRST) {
        newState.selectFirst = action.status
        return newState;
    } else if (action.type === DEFAULT_HEADER_STATUS) {
        newState.headerStatus = action.status
        return newState;
    }
    
    return state;
}