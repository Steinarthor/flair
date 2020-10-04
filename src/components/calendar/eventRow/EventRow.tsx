import React from 'react'
import { format } from 'date-fns'
import { Props } from './types'
import Location from '../../../icons/location_on-24px.svg'
import Clock from '../../../icons/schedule-24px.svg'
import styles from './eventRow.scss'

const colorMap: { [key: string]: string } = {
    Programming: '#bb86fc',
    Art: '#ff57bb',
    Music: '#03dac6',
    Sports: ' #00b0ff',
}

const EventRow: React.FC<Props> = ({ eventRow }: Props) => {
    return (
        <div className={styles.eventRow}>
            <span
                className={styles.eventTitle}
                style={{ backgroundColor: colorMap[eventRow.type] }}
            >
                {eventRow.title}
            </span>
            {/**
             * <div className={styles.eventLocation}>
                <span className={styles.eventPlace}>
                    <Location />
                    {eventRow.place}
                </span>
            </div>
            <div className={styles.eventDuration}>
                <Clock />
                <span>{format(eventRow.startTime, 'H:m')}</span>
                <span>-</span>
                <span>{format(eventRow.startTime, 'H:m')}</span>
            </div>
             */}
        </div>
    )
}

export default EventRow
