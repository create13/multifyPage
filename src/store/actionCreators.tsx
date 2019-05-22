import { REQ_LIST_DATA, REQ_REMOVE_DATA, REQ_EDIT_DATA, REQ_LOADING } from './actionTypes'
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
export const changeLoading = (status: boolean) => ({
    type: REQ_LOADING,
    status
})