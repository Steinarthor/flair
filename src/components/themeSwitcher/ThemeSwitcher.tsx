import React from 'react'
import { useDispatch, useContext } from '../../context/Context'
import MoonSvg from '../../icons/nights_stay-24px.svg'
import SunSvg from '../../icons/wb_sunny-24px.svg'
import styles from './ThemeSwitcher.scss'

const ThemeSwitcher: React.FC = () => {
    const dispatch = useDispatch()
    const context = useContext()

    return context.theme === 'dark' ? (
        <SunSvg
            className={styles.themeIcon}
            onClick={() => {
                dispatch({ type: 'SET_THEME', payload: { theme: 'light' } })
                document
                    .querySelector('html')
                    ?.setAttribute(
                        'style',
                        'background-color:#ffffff; transition: background-color 100ms ease-in-out'
                    )
                localStorage.setItem('theme', 'light')
            }}
        />
    ) : (
        <MoonSvg
            className={styles.themeIcon}
            onClick={() => {
                dispatch({ type: 'SET_THEME', payload: { theme: 'dark' } })
                document
                    .querySelector('html')
                    ?.setAttribute(
                        'style',
                        'background-color:#242526; transition: background-color 100ms ease-in-out'
                    )
                localStorage.setItem('theme', 'dark')
            }}
        />
    )
}

export default ThemeSwitcher
