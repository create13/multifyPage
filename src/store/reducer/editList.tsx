import { EDIT_LIST_DATA } from '../actionTypes'
import defaultState from '../defaultState'
export default (state: any = defaultState, action: any) => {
    if (action.type === EDIT_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.listData.push(action.menu);
        return newState;
    }
    return state;
}