import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useQuery } from '@apollo/client'
import { USER } from '../../queries/user'
import Header from '../../components/header/header'
import styles from './dashboard.scss'

const Dashboard: React.FC<RouteComponentProps> = () => {
    const { loading, error, data } = useQuery(USER)

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
            </main>
        </>
    )
}

export default Dashboard
