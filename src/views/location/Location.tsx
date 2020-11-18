import React from 'react'
import { RouteComponentProps, useParams } from '@reach/router'
import { useQuery } from '@apollo/client'
import { EVENT_LOCATION } from '../../queries/eventLocation'
import { Event } from '../../components/calendar/calendarEvents/types'
import Header from '../../components/header/header'
import styles from './location.scss'

const Location: React.FC<RouteComponentProps> = () => {
    const params = useParams()
    const { loading, error, data } = useQuery(EVENT_LOCATION, {
        variables: {
            location: params.location,
        },
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
            <main className={styles.location}>
                <div>
                    {data.eventLocation.map((event: Event) => {
                        return (
                            <div key={event.id}>
                                <h1>{event.title}</h1>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Location
