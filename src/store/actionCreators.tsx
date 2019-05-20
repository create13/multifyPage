import { REQ_LIST_DATA, REQ_REMOVE_DATA, REQ_EDIT_DATA } from './actionTypes'
export const addList = (todos: any) => ({
    type: REQ_LIST_DATA,
    todos
})
export const delList = (item: any) => ({
    type: REQ_REMOVE_DATA,
    item
})
export const editList = (menu: string) => ({
    type: REQ_EDIT_DATA,
    menu
})