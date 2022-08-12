import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import styles from './GetStarted.module.scss'
import { NextIcon } from '../../components/Icons'
import { setUserName } from '../../redux/actions'

function GetStarted() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const introRef = useRef()
    const nameInputRef = useRef()
    const nextStepRef = useRef()
    const getBtnRef = useRef()

    const isFirstTime = JSON.parse(localStorage.getItem('first-time')) ?? true

    useEffect(() => {
        if (isFirstTime) {
            localStorage.setItem('first-time', false)
        }
        else {
            navigate('/todoapp/home')
        }
    }, [])

    const handleNext = () => {
        introRef.current.style.display = 'none'
        nextStepRef.current.style.display = 'none'

        nameInputRef.current.hidden = false
        nameInputRef.current.focus()
        getBtnRef.current.hidden = false
    }

    const handleGetStarted = (e) => {
        if (name !== '') {
            dispatch(setUserName(name))
            navigate('/todoapp/home')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.intro} ref={introRef}>
                    <h3>Get Orangized Your Life</h3>
                    <p>Todo-App is a simple and effective to-do-app list and task manager app which helps you manage time </p>
                </div>
                <input 
                    ref={nameInputRef}
                    className={styles.nameInput} 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Enter your name...'
                    hidden
                />
            </div>
            <div className={styles.navigate}>
                <div ref={nextStepRef} className={styles.nextStep} onClick={handleNext}>
                    <NextIcon />
                </div>
                <div ref={getBtnRef} className={styles.getBtn} onClick={handleGetStarted} hidden>
                    <span>Get Started</span>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
