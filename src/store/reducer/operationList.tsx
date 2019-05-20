import { ADD_LIST_DATA, REMOVE_LIST_DATA } from '../actionTypes'
import defaultState from '../defaultState'
export default (state: any = defaultState, action: any)=> {
    if (action.type === ADD_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        let reduceArray = null;
        let copyObj: any = {};
        newState.listData.push(action.todos);
        reduceArray = newState.listData.reduce((initArray: any, now: any) => {
            copyObj[now.menuSecond] ? '': copyObj[now.menuSecond] = true && initArray.push(now);
            return initArray;
        }, []);
        newState.listData = reduceArray;
        return newState;
    }
    if (action.type === REMOVE_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.listData.forEach((item: any, index: number) => {
            if (item.menuSecond === action.item.menuSecond) {
                newState.listData.splice(index, 1); 
            }
        })
        return newState;
    }
    return state;
}