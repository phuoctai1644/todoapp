import { ADD_TODO, CHANGE_GROUP, SET_CUR_GROUP, TOGGLE_TODO } from "./type"

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload,
    }
}

export const setCurGroup = (payload) => {
    return {
        type: SET_CUR_GROUP,
        payload
    }
}

export const changeGroup = (payload) => {
    return {
        type: CHANGE_GROUP,
        payload
    }
}
