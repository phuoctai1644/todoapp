import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../../components/Header'
import TodoGroup from '../../components/TodoGroup'
import styles from './Home.module.scss'
import {MenuIcon} from '../../components/Icons'

function Home() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.menuBtn}>
                <MenuIcon />
            </button>
            <Header />
            <div className={styles.todoGroup}>
                <TodoGroup />
            </div>
            <div className={styles.addBtn}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        </div>
    )
}

export default Home
