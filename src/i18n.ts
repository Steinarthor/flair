import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

// Languages
import translationEng from './locales/gb/translation.json'
import translationIs from './locales/is/translation.json'

const resources = {
    is: {
        translation: translationIs,
    },
    gb: {
        translation: translationEng,
    },
}

i18n.use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources,
        lng: 'gb',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
