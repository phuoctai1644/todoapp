import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'

function Header() {
    const todayTodos = JSON.parse(localStorage.getItem('Today')) ?? []

    return (
        <div className={styles.wrapper}>
            <div className={styles.status}>
                <h3>Hello Alison</h3>
                <p>Today you have {todayTodos.length} {todayTodos.length > 1 ? 'tasks' : 'task'}</p>
            </div>  
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
        </div>
    )
}

export default Header
