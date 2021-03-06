import React from 'react'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { Props } from './types'
import { useContext } from '../../context/Context'
import LocationPicker from '../../components/locationPicker/LocationPicker'
import LangPicker from '../../components/langpicker/LangPicker'
import ThemeSwitcher from '../../components/themeSwitcher/ThemeSwitcher'
import ProfileSvg from '../../icons/account_circle-24px.svg'
import MessageSvg from '../../icons/inbox-24px.svg'
import NotificationSvg from '../../icons/notifications-24px.svg'
import styles from './header.scss'

const Header: React.FC<Props> = () => {
    const { t } = useTranslation()
    const context = useContext()
    console.log(context.isLoggedIn)
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.title}>
                Flair
            </Link>
            <div className={styles.headerActions}>
                {/**
                 * <nav className={styles.headerNavigation}>
                        <Link to="/talents" className={styles.navItem}>
                            {t('Talents')}
                        </Link>
                    </nav>
                 */}
                <LocationPicker />
                <LangPicker />
                <div className={styles.iconActions}>
                    {/*<ThemeSwitcher />*/}
                    <NotificationSvg />
                    <MessageSvg />
                    {context.isLoggedIn ? (
                        <Link to="/dashboard" className={styles.login}>
                            <ProfileSvg />
                        </Link>
                    ) : (
                        <Link to="/login" className={styles.login}>
                            <span>Log in</span>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
