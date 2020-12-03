import React from 'react'
import { RouteComponentProps, useNavigate } from '@reach/router'
import { useQuery } from '@apollo/client'
import { USER } from '../../queries/user'
import { useDispatch } from '../../context/Context'
import Header from '../../components/header/header'
import styles from './dashboard.scss'

const Dashboard: React.FC<RouteComponentProps> = () => {
    const { loading, error, data } = useQuery(USER)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signOut = () => {
        localStorage.clear()
        dispatch({
            type: 'SET_LOGGED_IN',
            payload: { isLoggedIn: false },
        })
        navigate('/', { replace: true })
    }

    if (error) {
        console.error(error)
        return (
            <div>
                <h1>Something went wrong!</h1>
            </div>
        )
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Header />
            <main className={styles.dashboard}>
                <h1>Welcome! {data.user.name}</h1>
                <span
                    onClick={signOut}
                    onKeyPress={signOut}
                    role="button"
                    tabIndex={0}
                >
                    Sign out
                </span>
            </main>
        </>
    )
}

export default Dashboard
