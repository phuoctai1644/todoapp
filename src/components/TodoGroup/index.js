import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GroupItem from './GroupItem'
import {changeGroup} from '../../redux/actions'
import { ImportantIcon, PlanIcon, SunIcon } from '../../components/Icons'
import styles from './TodoGroup.module.scss'

const TODO_GROUP = [
    {
        icon: <SunIcon />,
        name: 'Today',
    },
    {
        icon: <ImportantIcon />,
        name: 'Important',
    },
    {
        icon: <PlanIcon />,
        name: 'Plan',
    },
]

function TodoGroup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChangeGroup = (groupItem) => {
        dispatch(changeGroup(groupItem.name))
        navigate('/detailGroup')
    }

    return (
        <>
            {TODO_GROUP.map((groupItem, index) => (
                <div
                    key={index}
                    className={styles.groupItemLink}
                    onClick={() => handleChangeGroup(groupItem)}
                >
                    <GroupItem 
                        key={index}
                        icon={groupItem.icon}
                        groupName={groupItem.name}
                    />
                </div>
            ))}
        </>
    )
}

export default TodoGroup
