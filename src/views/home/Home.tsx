import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from '@reach/router'
import Header from '../../components/header/header'

const Home: React.FC<RouteComponentProps> = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <main>
                <h1>{t('Welcome')}</h1>
            </main>
        </>
    )
}

export default Home
