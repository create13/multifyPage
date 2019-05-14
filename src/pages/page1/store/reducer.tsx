import { ADD_LIST_DATA } from './actionTypes'
const defaultState = {
    listData: []
}
export default (state: any = defaultState, action: any)=> {
    if (action.type === ADD_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        console.log('todos', action.todos)
        if (newState.listData.indexOf(action.todos.menuSecond) === -1) {
            newState.listData.push(action.todos);
        }
        return newState;
    }
    return state;
}