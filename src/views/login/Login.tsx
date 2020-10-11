import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Auth from '../../components/auth/Auth'
import Header from '../../components/header/header'
import styles from './login.scss'

const Login: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <main className={styles.login}>
                <Auth />
            </main>
        </>
    )
}

export default Login
