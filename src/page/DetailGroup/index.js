import { faArrowLeft, faEllipsisVertical, faPlus, faPen, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo } from '../../redux/actions'
import { SunIcon } from '../../components/Icons'
import styles from './DetailGroup.module.scss'

function DetailGroup() {
    const dispatch = useDispatch()
    const TODOS = useSelector(state => state.todos)
    const curGroup = useSelector(state => state.currentGroup)
    const addTodoRef = useRef()
    const addBtnRef = useRef()

    const [todo, setTodo] = useState('')

    const handleShowAddTodo = () => {
        addBtnRef.current.style.display = 'none'
        addTodoRef.current.style.display = 'flex'

        // Autofocus on Typing todo input
        addTodoRef.current.children[1].focus()
    }

    const handleEnterAddTodo = (e) => {
        if (e.keyCode === 13 && todo !== '') {
            dispatch(addTodo(todo))
            setTodo('')
        }
    }

    const handleClickAddTodo = () => {
        if (todo !== '') {
            dispatch(addTodo(todo))
            setTodo('')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.navigate}>
                <Link to='/home' className={styles.navigateLink}>
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
                            <label>{todo.content}</label>
                        </div>
                        <div className={styles.edit}>
                            <FontAwesomeIcon icon={faPen} />
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
                    value={todo}
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
