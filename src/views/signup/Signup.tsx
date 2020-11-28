import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Signup from '../../components/signup/SignUp'
import Header from '../../components/header/header'
import styles from './signup.scss'

const SignUp: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <main className={styles.signUp}>
                <Signup />
            </main>
        </>
    )
}

export default SignUp
