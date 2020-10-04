import React from 'react'
import { useContext } from '../../../context/Context'
import { format, isToday } from 'date-fns'
import { EventRowType } from '../eventRow/types'
import EventRow from '../eventRow/EventRow'
import Tag from '../../tag/Tag'
import eventRowMocks from './mocks'
import classNames from 'classnames/bind'
import styles from './calendarDayDetails.scss'
const cx = classNames.bind(styles)

// TODO: Fix this
const uniqueTags = (): Set<any> => {
    const tagSet = new Set()
    eventRowMocks.map((eventMock: EventRowType) => tagSet.add(eventMock.type))
    return tagSet
}

const CalendarDayDetails: React.FC = () => {
    const context = useContext()

    return (
        <div
            className={cx('calendarDayDetails', {
                showDetails: context.calendar.hasSelected,
            })}
        >
            <div className={styles.eventTags}>
                {[...uniqueTags()].map((tag: string, index: number) => {
                    return <Tag tagTitle={tag} key={`${tag}-${index}`} />
                })}
            </div>
            <div className={styles.calendarRow}>
                <div className={styles.calendarRowTime}>
                    <span className={styles.calendarRowWeekday}>
                        {format(context.calendar.selectedDate, 'EEE')}
                    </span>
                    <span className={styles.calendarRowDate}>
                        {format(context.calendar.selectedDate, 'dd')}
                    </span>
                    {isToday(context.calendar.selectedDate) && (
                        <span>Today</span>
                    )}
                </div>
                <div
                    className={styles.calendarRowEvents}
                    style={{ height: `${eventRowMocks.length * 40}px` }}
                >
                    {eventRowMocks.map((mock: EventRowType, index: number) => {
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

export default CalendarDayDetails
