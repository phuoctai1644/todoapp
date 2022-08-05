import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import styles from './Header.module.scss'

function Header() {
    const userName = useSelector(state => state.userName)
    const todayTodos = JSON.parse(localStorage.getItem('Today')) ?? []

    return (
        <div className={styles.wrapper}>
            <div className={styles.status}>
                <h3>Hello {userName}</h3>
                <p>Today you have {todayTodos.length} {todayTodos.length > 1 ? 'tasks' : 'task'}</p>
            </div>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
        </div>
    )
}

export default Header
