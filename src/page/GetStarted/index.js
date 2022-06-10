import {Link, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import styles from './GetStarted.module.scss'

function GetStarted() {
    const navigate = useNavigate()
    const isFirstTime = JSON.parse(localStorage.getItem('first-time')) ?? true

    useEffect(() => {
        if (isFirstTime) {
            localStorage.setItem('first-time', false)
        }
        else {
            navigate('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.intro}>
                <h3>Get Orangized Your Life</h3>
                <p>Todo-App is a simple and effective to-do-app list and task manager app which helps you manage time </p>
            </div>
            <Link className={styles.getBtn} to='/home'>Get Started</Link>
        </div>
    )
}

export default GetStarted
