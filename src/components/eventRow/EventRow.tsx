import React from 'react'
import { Link } from '@reach/router'
import { format } from 'date-fns'
import { Props } from './types'
import Tag from '../tag/Tag'
import Location from '../../icons/location_on-24px.svg'
import Calendar from '../../icons/calendar_today-24px.svg'
import styles from './eventRow.scss'

const colorMap: { [key: string]: string } = {
    Programming: '#bb86fc',
    Art: '#ff57bb',
    Music: '#03dac6',
    Sports: ' #00b0ff',
}

const EventRow: React.FC<Props> = ({ eventRow }: Props) => {
    return (
        <Link
            to={`/${eventRow.place.toLocaleLowerCase()}/${eventRow.type.toLocaleLowerCase()}/${
                eventRow.slug
            }`}
            className={styles.eventRow}
            style={{ border: `2px solid ${colorMap[eventRow.type]}` }}
        >
            <div className={styles.eventInfo}>
                <span className={styles.eventTitle}>{eventRow.title}</span>
                <span className={styles.eventPlace}>
                    <Location />
                    {eventRow.place}
                </span>
                <div className={styles.eventDuration}>
                    <Calendar />
                    <span>{format(eventRow.startTime, 'HH:m')}</span>
                    <span>-</span>
                    <span>{format(eventRow.endTime, 'HH:m')}</span>
                </div>
                <div className={styles.eventTags}>
                    {eventRow.tags.map((tag: string, index: number) => {
                        return <Tag tagTitle={tag} key={`${tag}-${index}`} />
                    })}
                </div>
            </div>
        </Link>
    )
}

export default EventRow
