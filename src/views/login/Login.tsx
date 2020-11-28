import React from 'react'
import { RouteComponentProps } from '@reach/router'
import SignIn from '../../components/signIn/SignIn'
import Header from '../../components/header/header'
import styles from './login.scss'

const Login: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <main className={styles.login}>
                <SignIn />
            </main>
        </>
    )
}

export default Login
