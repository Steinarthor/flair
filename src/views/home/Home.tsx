import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from '@reach/router'
import Header from '../../components/header/header'
import styles from './home.scss'

const Home: React.FC<RouteComponentProps> = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <main className={styles.home}>
                <h1>{t('Welcome')}</h1>
            </main>
        </>
    )
}

export default Home
