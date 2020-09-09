import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Iceland from '../../icons/is.svg'
import Uk from '../../icons/gb.svg'
import styles from './langPicker.scss'

const LangPicker: React.FC = () => {
    const { i18n } = useTranslation()
    const node = useRef<HTMLDivElement>(null)
    const [showLanguageList, toggleLanguageList] = useState(false)
    const [selectedLang, setSelectedLang] = useState(i18n.language)
    const toggleLangNav = () => toggleLanguageList(!showLanguageList)
    const selectLanguage = (locale: string) => {
        setSelectedLang(() => locale)
        toggleLanguageList(false)
        i18n.changeLanguage(locale)
    }
    const renderLanguageFlag = () => {
        const lang = languageConfig.find((lang) => lang.locale === selectedLang)
        if (lang) {
            return lang.icon
        }
    }
    const handleClickOutside = (event: Event) => {
        // TODO: Add ESC key
        if (node.current && !node.current.contains(event.target as Node)) {
            toggleLanguageList(false)
        }
    }

    const languageConfig = [
        {
            icon: <Iceland className={styles.flag} onClick={toggleLangNav} />,
            text: 'Iceland',
            locale: 'is',
        },
        {
            icon: <Uk className={styles.flag} onClick={toggleLangNav} />,
            text: 'English (UK)',
            locale: 'gb',
        },
    ]
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false)
        return () => {
            document.removeEventListener('click', handleClickOutside, false)
        }
    }, [])
    return (
        <div className={styles.flags} ref={node}>
            {renderLanguageFlag()}
            {showLanguageList && (
                <div className={styles.languageList}>
                    {languageConfig.map(({ icon, text, locale }) => {
                        return (
                            <div
                                key={locale}
                                className={styles.language}
                                role="button"
                                tabIndex={0}
                                onKeyPress={() => selectLanguage(locale)}
                                onClick={() => selectLanguage(locale)}
                            >
                                {icon}
                                <span className={styles.languageText}>
                                    {text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default LangPicker
