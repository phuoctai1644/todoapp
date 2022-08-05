import { 
    ADD_GROUP, 
    ADD_TODO, 
    CHANGE_GROUP, 
    DELETE_TODO,
    DELETE_GROUP, 
    SET_CUR_GROUP, 
    TOGGLE_TODO, 
    UPDATE_TODO, 
    SET_USER_NAME
} from "./type"

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

export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload,
    }
} 

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
}

export const addGroup = (payload) => {
    return {
        type: ADD_GROUP,
        payload,
    }
}

export const deleteGroup = (payload) => {
    return {
        type: DELETE_GROUP,
        payload
    }
}

export const setUserName = (payload) => {
    return {
        type: SET_USER_NAME,
        payload
    }
}
