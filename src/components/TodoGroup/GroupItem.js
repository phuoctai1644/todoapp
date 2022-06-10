import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import styles from './TodoGroup.module.scss'

function GroupItem({ icon, groupName }) {
    const todos = JSON.parse(localStorage.getItem(groupName)) ?? []

    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.info}>
                <h2>{groupName}</h2>
                <p>{todos.length} {todos.length > 1 ? 'Tasks' : 'Task'}</p>
            </div>
            <FontAwesomeIcon className={styles.moreBtn} icon={faEllipsisVertical} />
        </div>
    )
}

export default GroupItem
