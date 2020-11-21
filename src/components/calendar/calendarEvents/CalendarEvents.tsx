import React, { useState } from 'react'
import Input from '../../input/Input'
import Location from '../../../icons/location_on-24px.svg'
import Tag from '../../../components/tag/Tag'
import Attendance from '../../attendance/Attendance'
import { Link } from '@reach/router'
import { addHours, format } from 'date-fns'
import { Event, Category, Props } from './types'
import styles from './calendarEvents.scss'

const CalendarEvents: React.FC<Props> = ({
    events,
    handleTagSelection,
    selectedTags,
    eventTags,
}: Props) => {
    const [filter, updateFilter] = useState<string>('')
    const filterEvents = (events: Event[]) => {
        const copy = [...events]
        const filteredEvents = copy.filter((event: Event) =>
            event.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        return filteredEvents
    }
    const formatText = (text: string): string =>
        text.split(' ').join('-').toLocaleLowerCase()
    const constructEventLink = (event: Event): string => {
        return `${formatText(event.location)}/${formatText(
            event.category
        )}/${formatText(event.title)}`
    }
    return (
        <div className={styles.calendarEvents}>
            <div className={styles.eventFilter}>
                <Input
                    name="Event search"
                    type="text"
                    value={filter}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        updateFilter(e.target.value)
                    }}
                    placeholder="Search for event"
                    showError={false}
                    required={false}
                />
                <div className={styles.filterBy}>
                    <div className={styles.filterTags}>
                        {eventTags.map((category: Category) => (
                            <Tag
                                key={category}
                                category={category}
                                invert
                                handleClick={(category) =>
                                    handleTagSelection(category)
                                }
                                isSelected={selectedTags.includes(category)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.calendarEventsContainer}>
                {filterEvents(events).map((event: Event) => {
                    constructEventLink(event)
                    return (
                        <Link
                            key={event.id}
                            to={constructEventLink(event)}
                            state={{ id: event.id }}
                            className={styles.eventLink}
                        >
                            <div className={styles.event}>
                                <div className={styles.eventTime}>
                                    <span className={styles.time}>
                                        {format(
                                            new Date(event.timestamp),
                                            'H:mm'
                                        )}
                                    </span>
                                    <span className={styles.duration}>
                                        {format(
                                            addHours(
                                                new Date(event.timestamp),
                                                event.duration
                                            ),
                                            'HH:mm'
                                        )}
                                    </span>
                                </div>
                                <div className={styles.eventDetails}>
                                    <span className={styles.eventTitle}>
                                        {event.title}
                                    </span>
                                    <span className={styles.eventHoast}>
                                        {event.host}
                                    </span>
                                    <span className={styles.location}>
                                        <Location /> {event.location}
                                    </span>
                                    <div className={styles.eventTag}>
                                        <Tag
                                            category={event.category}
                                            invert={false}
                                        />
                                    </div>
                                </div>
                                <Attendance
                                    attendees={event.attending}
                                    moveLeft={false}
                                    moveRight={true}
                                />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CalendarEvents
