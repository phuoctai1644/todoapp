import { ADD_TODO, CHANGE_GROUP, SET_CUR_GROUP, TOGGLE_TODO } from "./type"

const initState = {
    todos: JSON.parse(localStorage.getItem('Today')) ?? [],
    currentGroup: 'Today',
    group: ['Today', 'Important', 'Planed']
}

const reducer = (state = initState, action) => {
    let newTodos
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
            const todoClicked = state.todos[action.payload]
            
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
        default: 
            return state
    }
}

export default reducer
