import React, { useState } from 'react'
import classNames from 'classnames/bind'
import {
    addMonths,
    subMonths,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    addDays,
    format,
    getYear,
    isBefore,
    isAfter,
    getDay,
    subDays,
} from 'date-fns'
import { CalendarDay } from './types'
import Arrow from '../../icons/play_arrow-24px.svg'
import styles from './bigCalendar.scss'
const cx = classNames.bind(styles)

const constructWeekDays = () => {
    // Add locale later.
    let start = startOfWeek(new Date(), { weekStartsOn: 0 })
    const end = endOfWeek(start, { weekStartsOn: 0 })
    const weekdays: Date[] = []

    while (isBefore(start, end)) {
        start = addDays(start, 1)
        weekdays.push(start)
    }
    return weekdays
}

const constructMonthDays = (startDay: Date) => {
    // Add locale later.
    const firstDayOfMonth = startOfMonth(startDay)
    const lastDayOfMonth = endOfMonth(startDay)
    const lastDayOfMonthIndex = getDay(lastDayOfMonth)
    const weekdayStartIndex =
        getDay(firstDayOfMonth) === 0 ? 0 : getDay(firstDayOfMonth) - 1
    const monthDays: CalendarDay[] = []

    let start = subDays(firstDayOfMonth, weekdayStartIndex)
    let end = addDays(lastDayOfMonth, 7 - lastDayOfMonthIndex)

    while (isBefore(start, end)) {
        monthDays.push({
            day: start,
            dateInPast: isBefore(start, firstDayOfMonth),
            dateInFuture: isAfter(start, lastDayOfMonth),
        })
        start = addDays(start, 1)
    }
    return monthDays
}

const BigCalendar: React.FC = () => {
    const weekdays = constructWeekDays()
    const datesInMonth = constructMonthDays(new Date())
    const [calendarState, setCalendarState] = useState({
        month: new Date(),
        year: getYear(new Date()),
        calendarDays: datesInMonth,
    })
    const nextMonth = () => {
        const next = addMonths(calendarState.month, 1)
        setCalendarState({
            month: next,
            year: getYear(next),
            calendarDays: constructMonthDays(next),
        })
    }
    const previousMonth = () => {
        const prev = subMonths(calendarState.month, 1)
        setCalendarState({
            month: prev,
            year: getYear(prev),
            calendarDays: constructMonthDays(prev),
        })
    }
    const { month, year, calendarDays } = calendarState
    return (
        <div className={styles.calendar}>
            <div className={styles.calendarNavigation}>
                <button onClick={previousMonth}>
                    {' '}
                    <Arrow className={styles.arrowBack} />
                </button>
                <span className={styles.month}>
                    {format(month, 'MMMM')} {year}
                </span>
                <button onClick={nextMonth}>
                    <Arrow className={styles.arrowForward} />
                </button>
            </div>
            <div className={styles.weekdays}>
                {weekdays.map((weekday) => (
                    <span key={weekday.getDate()} className={styles.weekday}>
                        {format(weekday, 'EEE')}
                    </span>
                ))}
            </div>
            <div className={styles.calendarDays}>
                {calendarDays.map((calendarDay: CalendarDay, index: number) => (
                    <div
                        key={`${calendarDay.day.getDate()}-%${index}`}
                        className={cx('calendarDay', {
                            dateInPast: calendarDay.dateInPast,
                            dateInFuture: calendarDay.dateInFuture,
                        })}
                    >
                        {format(calendarDay.day, 'd')}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BigCalendar
