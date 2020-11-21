import React from 'react'
import Header from '../../components/header/header'
import Attendance from '../../components/attendance/Attendance'
import Location from '../../icons/location_on-24px.svg'
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

    //TODO: Add favorite / invite / map for location.
    return (
        <>
            <Header />
            <main className={styles.event}>
                <div>
                    <h1 className={styles.title}>{data.event.title}</h1>
                    <div className={styles.attendess}>
                        <Attendance
                            attendees={data.event.attending}
                            moveLeft={true}
                            moveRight={false}
                        />{' '}
                        <span className={styles.going}>Going</span>
                    </div>
                    <span className={styles.location}>
                        <Location /> {data.event.location}
                    </span>
                    <div className={styles.description}>
                        <h3>About this event</h3>
                        {data.event.description}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Event
