import React, { useState } from 'react'
import Input from '../../input/Input'
import Location from '../../../icons/location_on-24px.svg'
import Tag from '../../../components/tag/Tag'
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
                    return (
                        <div key={event.id} className={styles.event}>
                            <div className={styles.eventTime}>
                                <span className={styles.time}>
                                    {format(new Date(event.time), 'H:mm')}
                                </span>
                                <span className={styles.duration}>
                                    {format(
                                        addHours(
                                            new Date(event.time),
                                            event.duration
                                        ),
                                        'HH:mm'
                                    )}
                                </span>
                            </div>
                            <div className={styles.eventDetails}>
                                <span className={styles.eventTitle}>
                                    {event.title}
                                    <Tag
                                        category={event.category}
                                        invert={false}
                                    />
                                </span>
                                <span className={styles.eventHoast}>
                                    {event.hoast}
                                </span>
                                <span className={styles.location}>
                                    <Location /> {event.location}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CalendarEvents
