import React from 'react'
import Header from '../../components/header/header'
import Attendance from '../../components/attendance/Attendance'
import { RouteComponentProps } from '@reach/router'
import { useQuery } from '@apollo/client'
import { EVENT } from '../../queries/event'
import styles from './event.scss'

interface routeState {
    location: {
        state: {
            id: string
        }
    }
}

const Event: React.FC<RouteComponentProps<routeState>> = (
    props: RouteComponentProps<routeState>
) => {
    const { loading, error, data } = useQuery(EVENT, {
        variables: { id: Number(props?.location?.state.id) },
    })

    if (loading) {
        return <div>...Loading</div>
    }

    if (error) {
        console.error(error)
        return <div>Something went wrong</div>
    }

    return (
        <>
            <Header />
            <main className={styles.event}>
                <div>
                    <Attendance attendees={data.event.attending} />
                    <h1>{data.event.title}</h1>
                    <div>{data.event.description}</div>
                </div>
            </main>
        </>
    )
}

export default Event
