import React, { useState } from 'react'
import { useDispatch } from '../../context/Context'
import MoonSvg from '../../icons/nights_stay-24px.svg'
import SunSvg from '../../icons/wb_sunny-24px.svg'
import styles from './ThemeSwitcher.scss'

const ThemeSwitcher: React.FC = () => {
    const [showDarkTheme, toggleTheme] = useState(false)
    const dispatch = useDispatch()

    return showDarkTheme ? (
        <SunSvg
            className={styles.themeIcon}
            onClick={() => {
                toggleTheme(!showDarkTheme)
                dispatch({ type: 'SET_THEME', payload: { theme: 'light' } })
            }}
        />
    ) : (
        <MoonSvg
            className={styles.themeIcon}
            onClick={() => {
                toggleTheme(!showDarkTheme)
                dispatch({ type: 'SET_THEME', payload: { theme: 'dark' } })
            }}
        />
    )
}

export default ThemeSwitcher
