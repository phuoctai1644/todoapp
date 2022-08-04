import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './TodoGroup.module.scss'
import { changeGroup, deleteGroup } from '../../redux/actions'
import { DeleteIcon } from '../Icons'

function GroupItem({ icon, groupName }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const todos = JSON.parse(localStorage.getItem(groupName)) ?? []

    const handleChangeGroup = (name) => {
        dispatch(changeGroup(name))
        navigate('/todoapp/detailGroup')
    }

    const handleDeleteGroup = (name) => {
        dispatch(deleteGroup(name))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main} onClick={() => handleChangeGroup(groupName)}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.info}>
                    <h2>{groupName}</h2>
                    <p>{todos.length} {todos.length > 1 ? 'Tasks' : 'Task'}</p>
                </div>
            </div>
            <div className={styles.deleteIcon} onClick={() => handleDeleteGroup(groupName)}>
                <DeleteIcon />
            </div>
        </div>
    )
}

export default GroupItem
