import { 
    ADD_GROUP, 
    ADD_TODO, 
    CHANGE_GROUP, 
    DELETE_GROUP, 
    DELETE_TODO, 
    SET_CUR_GROUP, 
    SET_USER_NAME, 
    TOGGLE_TODO, 
    UPDATE_TODO 
} from "./type"

const initState = {
    todos: JSON.parse(localStorage.getItem('Today')) ?? [],
    group: JSON.parse(localStorage.getItem('group')) ?? ['Today', 'Important', 'Planed'],
    currentGroup: 'Today',
    userName: localStorage.getItem('username') ?? ''
}

const reducer = (state = initState, action) => {
    let newTodos, todoClicked, newGroup
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

        case DELETE_TODO: 
            newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)

            localStorage.setItem(state.currentGroup, JSON.stringify(newTodos))

            return {
                ...state,
                todos: newTodos
            }

        case ADD_GROUP:
            newGroup = [...state.group, action.payload]
            localStorage.setItem('group', JSON.stringify(newGroup))

            return {
                ...state,
                group: newGroup
            }
        
        case DELETE_GROUP:
            newGroup = state.group.filter(item => item !== action.payload)
            localStorage.setItem('group', JSON.stringify(newGroup))
            localStorage.removeItem(action.payload)

            return {
                ...state,
                group: newGroup
            }
        
        case SET_USER_NAME:
            localStorage.setItem('username', action.payload)
            return {
                ...state,
                userName: action.payload
            }

        default: 
            return state
    }
}

export default reducer
