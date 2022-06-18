import { ADD_TODO, CHANGE_GROUP, SET_CUR_GROUP, TOGGLE_TODO, UPDATE_TODO } from "./type"

const initState = {
    todos: JSON.parse(localStorage.getItem('Today')) ?? [],
    currentGroup: 'Today',
    group: ['Today', 'Important', 'Planed']
}

const reducer = (state = initState, action) => {
    let newTodos, todoClicked
    switch(action.type) {
        case SET_CUR_GROUP:
            return {
                ...state, 
                currentGroup: action.payload
            }

        case ADD_TODO:
            newTodos = [...state.todos, {
                content: action.payload,
                isDone: false,
            }]

            localStorage.setItem(state.currentGroup, JSON.stringify(newTodos))
            return {
                ...state, 
                todos: newTodos
            }

        case TOGGLE_TODO:
            todoClicked = state.todos[action.payload]
            
            newTodos = state.todos.map((todo, index) => {
                if (index === action.payload) return {
                    ...todoClicked,
                    isDone: !todoClicked.isDone
                }
                return todo
            })

            localStorage.setItem(state.currentGroup, JSON.stringify(newTodos))

            return {
                ...state, 
                todos: newTodos
            }
        
        case CHANGE_GROUP:
            return {
                ...state, 
                todos: JSON.parse(localStorage.getItem(action.payload)) ?? [],
                currentGroup: action.payload
            }

        case UPDATE_TODO:
            todoClicked = state.todos[action.payload.index]
            
            newTodos = state.todos.map((todo, index) => {
                if (index === action.payload.index) return {
                    ...todoClicked,
                    content: action.payload.content
                }
                return todo
            })

            localStorage.setItem(state.currentGroup, JSON.stringify(newTodos))

            return {
                ...state, 
                todos: newTodos
            }

        default: 
            return state
    }
}

export default reducer
