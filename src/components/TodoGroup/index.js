
import { useSelector } from 'react-redux'
import GroupItem from './GroupItem'
import { ImportantIcon, PlanIcon, SunIcon } from '../../components/Icons'
import styles from './TodoGroup.module.scss'

// const TODO_GROUP = [
//     {
//         icon: <SunIcon />,
//         name: 'Today',
//     },
//     {
//         icon: <ImportantIcon />,
//         name: 'Important',
//     },
//     {
//         icon: <PlanIcon />,
//         name: 'Plan',
//     },
// ]

const icon = <SunIcon />

function TodoGroup() {
    const TODO_GROUP = useSelector(state => state.group)

    return (
        <>
            {TODO_GROUP.map((groupName, index) => (
                <div key={index} className={styles.groupItemLink}>
                    <GroupItem 
                        key={index}
                        icon={icon}
                        groupName={groupName}
                    />
                </div>
            ))}
        </>
    )
}

export default TodoGroup
