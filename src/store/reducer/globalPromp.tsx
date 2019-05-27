import { LOADING_STATUS } from '../actionTypes'
import defaultState from '../defaultState'
export default (state: any = defaultState, action: any) => {
    if (action.type === LOADING_STATUS) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.loadingStatus = action.todos
        return newState;
    }
    return state;
}