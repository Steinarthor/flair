import React, { useState } from 'react'
import MoonSvg from '../../icons/nights_stay-24px.svg'
import SunSvg from '../../icons/wb_sunny-24px.svg'
import styles from './ThemeSwitcher.scss'

const ThemeSwitcher: React.FC = () => {
    const [showDarkTheme, toggleTheme] = useState(false)

    return showDarkTheme ? (
        <SunSvg
            className={styles.themeIcon}
            onClick={() => toggleTheme(!showDarkTheme)}
        />
    ) : (
        <MoonSvg
            className={styles.themeIcon}
            onClick={() => toggleTheme(!showDarkTheme)}
        />
    )
}

export default ThemeSwitcher
