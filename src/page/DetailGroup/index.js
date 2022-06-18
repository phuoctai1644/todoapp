import { 
    faArrowLeft, 
    faEllipsisVertical, 
    faPlus, 
    faPen, 
    faArrowUp, 
    faTrashCan, 
    faCheck 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo, updateTodo } from '../../redux/actions'
import { SunIcon } from '../../components/Icons'
import styles from './DetailGroup.module.scss'

function DetailGroup() {
    const dispatch = useDispatch()
    const TODOS = useSelector(state => state.todos)
    const curGroup = useSelector(state => state.currentGroup)
    const addTodoRef = useRef()
    const addBtnRef = useRef()
    const editTodoRef = useRef([])

    // const saveIconRef = useRef([])
    const editIconRef = useRef()

    const [_todo, setTodo] = useState('')

    const handleShowAddTodo = () => {
        setTodo('')

        addBtnRef.current.style.display = 'none'
        addTodoRef.current.style.display = 'flex'

        // If edit todo is being activing => display none it
        editTodoRef.current.map(item => item.style.display = 'none')

        // Autofocus on Typing todo input
        addTodoRef.current.children[1].focus()
    }

    const handleEnterAddTodo = (e) => {
        if (e.keyCode === 13 && _todo !== '') {
            dispatch(addTodo(_todo))
            setTodo('')
        }
    }

    const handleClickAddTodo = () => {
        if (_todo !== '') {
            dispatch(addTodo(_todo))
            setTodo('')
        }
    }

    const handleEditTodo = (content, index) => {
        const editTodoDOM = editTodoRef.current

        // Reset all edit input
        editTodoDOM.map(item => item.style.display = 'none')  
    
        // If at this time, input add is being shown => display none it
        addBtnRef.current.style.display = 'block'
        addTodoRef.current.style.display = 'none'

        // Styling edit input
        setTodo(content)
        editTodoDOM[index].style.display = 'block'
        editTodoDOM[index].focus()
    }

    const handleEnterUpdateTodo = (e, index) => {
        if (e.keyCode === 13) {
            const obj = {
                content: e.target.value,
                index
            }

            dispatch(updateTodo(obj))
            setTodo('')
            editTodoRef.current[index].style.display = 'none'
        }
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.navigate}>
                <Link to='/todoapp/home' className={styles.navigateLink}>
                    <FontAwesomeIcon className={styles.navigateIcon} icon={faArrowLeft} />
                </Link>
                <FontAwesomeIcon className={styles.navigateIcon} icon={faEllipsisVertical} />
            </div>
            
            <div className={styles.groupInfo}>
                <SunIcon width="80px" height="80px" />
                <div className={styles.text}>
                    <p>{TODOS.length} {TODOS.length > 1 ? 'Tasks' : 'Task'}</p>
                    <h2>{curGroup}</h2>
                </div>
            </div>

            <ul className={styles.todoList}>
                {TODOS.map((todo, index) => (
                    <div className={styles.todoWrap} key={index}>
                        <div className={styles.main}>
                            <input 
                                type="checkbox" 
                                defaultChecked={todo.isDone}
                                onChange={() => dispatch(toggleTodo(index))}
                            />
                            <div className={styles.content}>
                                <label>{todo.content}</label>
                                <input 
                                    ref={el => editTodoRef.current[index] = el} 
                                    className={styles.editInput}
                                    type="text" 
                                    value={_todo} 
                                    onChange={e => setTodo(e.target.value)}
                                    onKeyUp={(e) => handleEnterUpdateTodo(e, index)}
                                />
                            </div>
                        </div>
                        <div className={styles.option}>
                            <label ref={editIconRef} className={styles.edit} onClick={() => handleEditTodo(todo.content, index)}>
                                <FontAwesomeIcon icon={faPen} />
                            </label>

                            <label className={styles.delete} onClick={() => dispatch(deleteTodo(index))}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </label>

                            {/* Save edit todo => !! Available in next update */}
                            {/* <label ref={el => saveIconRef.current[index] = el} className={styles.save}>
                                <FontAwesomeIcon icon={faCheck} hidden />
                            </label> */}
                        </div>
                    </div>
                ))}
            </ul>

            <button className={styles.addBtn} ref={addBtnRef}>
                <FontAwesomeIcon icon={faPlus} onClick={handleShowAddTodo}/>
            </button>

            {/* Adding new todo area */}
            <div className={styles.addTodo} ref={addTodoRef}>
                <input type="checkbox" disabled />
                <input 
                    type="text" 
                    placeholder="Add a task"
                    value={_todo}
                    onChange={e => setTodo(e.target.value)}
                    onKeyUp={handleEnterAddTodo}
                />
                <button className={styles.icon}>
                    <FontAwesomeIcon icon={faArrowUp} onClick={handleClickAddTodo} />
                </button>
            </div>
        </div>
    )
}

export default DetailGroup
