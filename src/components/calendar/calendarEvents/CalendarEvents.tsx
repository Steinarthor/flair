import React from 'react'
import Location from '../../../icons/location_on-24px.svg'
import { addHours, format } from 'date-fns'
import { mocks } from './mocks'
import { Event } from './types'
import styles from './calendarEvents.scss'

const tagMap = {
    art: '#00b0ff',
    books: '#ffb300',
    dance: '#ff1744',
    film: '#03dac6',
    'food and drink': '#aa00ff',
    music: '#536dfe',
    programming: '#e17055',
    sports: '#ff57bb',
}

const CalendarEvents: React.FC = () => {
    return (
        <div className={styles.calendarEvents}>
            <input />
            {mocks.map((mock: Event) => {
                return (
                    <div key={mock.id} className={styles.event}>
                        <div className={styles.eventTime}>
                            <span className={styles.time}>
                                {format(mock.time, 'H:m')}
                            </span>
                            <span className={styles.duration}>
                                {format(
                                    addHours(mock.time, mock.duration),
                                    'HH:mm'
                                )}
                            </span>
                        </div>
                        <div className={styles.eventDetails}>
                            <span className={styles.eventTitle}>
                                {mock.title}
                                <span
                                    className={styles.tag}
                                    style={{
                                        backgroundColor: tagMap[mock.category],
                                    }}
                                >
                                    {mock.category}
                                </span>
                            </span>
                            <span className={styles.eventHoast}>
                                {mock.hoast}
                            </span>
                            <span className={styles.location}>
                                <Location /> {mock.location}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarEvents
