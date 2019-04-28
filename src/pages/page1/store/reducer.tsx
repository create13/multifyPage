import { ADD_LIST_DATA } from './actionTypes'
export default (state: any, action: any)=> {
    if (action.type === ADD_LIST_DATA) {
        console.log('ADD_LIST_DATA');
        const newState = [...state];
    }
    return state;
}