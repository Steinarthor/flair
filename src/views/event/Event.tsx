import React from 'react'
import { RouteComponentProps, useParams } from '@reach/router'
import { format } from 'date-fns'
import { EventRowType } from '../../components/eventRow/types'
import Header from '../../components/header/header'
import eventMocks from '../../components/eventList/mocks'
import styles from './styles.scss'

const Event: React.FC<RouteComponentProps> = () => {
    const params = useParams()
    const eventIndex = eventMocks.findIndex(
        (event: EventRowType) => event.slug === params.event
    )
    console.log(params, eventMocks)

    return (
        <>
            <Header />{' '}
            <main className={styles.category}>
                <section>
                    <div className={styles.eventTitle}>
                        <div className={styles.eventTitleContainer}>
                            <h1>{eventMocks[eventIndex].title}</h1>
                            <div className={styles.eventTimeAndLocation}>
                                <div className={styles.eventTimeContainer}>
                                    <span className={styles.eventTime}>
                                        {format(
                                            eventMocks[eventIndex].startTime,
                                            'dd MMMM yyyy'
                                        )}
                                    </span>
                                    <span className={styles.eventTime}>
                                        {format(
                                            eventMocks[eventIndex].startTime,
                                            'HH:mm'
                                        )}
                                        <span> - </span>
                                        <span className={styles.eventTime}>
                                            {format(
                                                eventMocks[eventIndex].endTime,
                                                'HH:mm'
                                            )}
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <span>{eventMocks[eventIndex].place}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Event
