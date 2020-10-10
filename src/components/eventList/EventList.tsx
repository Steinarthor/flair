import React, { useState } from 'react'
import { useContext } from '../../context/Context'
import { format, isToday } from 'date-fns'
import { EventRowType } from '../eventRow/types'
import EventRow from '../eventRow/EventRow'
import FilterDropDown from '../filterDropdown/FilterDropdown'
import eventRowMocks from './mocks'
import classNames from 'classnames/bind'
import styles from './eventList.scss'
const cx = classNames.bind(styles)

const EventList: React.FC = () => {
    const [eventRows, filterEventRow] = useState<EventRowType[]>(eventRowMocks)
    const context = useContext()
    const constructTagSelection = () => {
        return eventRowMocks.reduce(
            (accTags: Set<string>, row: EventRowType) => {
                for (const tag of row.tags) {
                    accTags.add(tag)
                }
                return accTags
            },
            new Set()
        )
    }
    const updateEventRow = (filters: string[]) => {
        const eventRowsCopy = [...eventRowMocks]
        const filterRows = eventRowsCopy.filter((event: EventRowType) => {
            return filters.includes(event.type)
        })
        filterEventRow(filterRows)

        if (filters.length === 0) {
            filterEventRow(eventRowMocks)
        }
    }

    const filterValues = [...constructTagSelection()]

    return (
        <div
            className={cx('eventList', {
                showDetails: context.calendar.hasSelected,
            })}
        >
            <div className={styles.filterDropDown}>
                <FilterDropDown
                    filterValues={filterValues}
                    callback={updateEventRow}
                />
            </div>
            <div className={styles.eventRow}>
                <div className={styles.eventRowTime}>
                    <span className={styles.eventRowWeekday}>
                        {format(context.calendar.selectedDate, 'EEE')}
                    </span>
                    <span className={styles.eventRowDate}>
                        {format(context.calendar.selectedDate, 'dd')}
                    </span>
                    {isToday(context.calendar.selectedDate) && (
                        <span>Today</span>
                    )}
                </div>
                <div className={styles.eventRowEvents}>
                    {eventRows.map((mock: EventRowType, index: number) => {
                        return (
                            <EventRow
                                key={`${mock.title}-${index}`}
                                eventRow={mock}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default EventList