import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import TodoGroup from '../../components/TodoGroup'
import styles from './Home.module.scss'
import { MenuIcon } from '../../components/Icons'
import { addGroup } from '../../redux/actions'

function Home() {
    const dispatch = useDispatch()
    const [group, setGroup] = useState('')
    const addGroupRef = useRef()
    const addIcon = useRef()

    const handleOpenAddGroup = () => {
        addGroupRef.current.hidden = false
        addGroupRef.current.focus()
        addIcon.current.style.display = 'none'
    }

    const handleCreateGroup = (e) => {
        if (e.keyCode === 13) {
            if (group !== '') {
                dispatch(addGroup(group))
            }
            addIcon.current.style.display = 'flex'
            addGroupRef.current.hidden = true
            setGroup('')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <button className={styles.menuBtn}>
                    <MenuIcon />
                </button>
                <Header />
                <div className={styles.todoGroup}>
                    <TodoGroup />
                </div>
                <div className={styles.addBtn} ref={addIcon}>
                    <FontAwesomeIcon icon={faPlus} onClick={handleOpenAddGroup} />
                </div>
            </div>
            <input 
                className={styles.inputAddGroup}
                type="text" 
                value={group} 
                onChange={e => setGroup(e.target.value)} 
                onKeyUp={handleCreateGroup}
                ref={addGroupRef}
                placeholder="Enter new group"
                hidden
            />
        </div>
    )
}

export default Home
