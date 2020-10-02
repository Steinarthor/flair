import React, { useState } from 'react'
import { is, enGB } from 'date-fns/locale'
import { useContext } from '../../context/Context'
import { addMonths, subMonths, format, getYear, isSameDay } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { constructMonthDays, constructWeekDays } from './utils'
import { DateInMonth } from './calendarDay/types'
import CalendarDay from './calendarDay/CalendarDay'
import Arrow from '../../icons/play_arrow-24px.svg'
import styles from './bigCalendar.scss'

const langMap: { [key: string]: Locale } = { is: is, gb: enGB }

const BigCalendar: React.FC = () => {
    const { i18n } = useTranslation()
    const context = useContext()

    const weekdays = constructWeekDays(i18n.language)
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
        <div className={styles.calendar} id="calendar">
            <div className={styles.calendarNavigation}>
                <button onClick={previousMonth}>
                    {' '}
                    <Arrow className={styles.arrowBack} />
                </button>
                <span className={styles.month}>
                    {format(month, 'MMMM', { locale: langMap[i18n.language] })}{' '}
                    {year}
                </span>
                <button onClick={nextMonth}>
                    <Arrow className={styles.arrowForward} />
                </button>
            </div>
            <div className={styles.weekdays}>
                {weekdays.map((weekday) => (
                    <span key={weekday.getDate()} className={styles.weekday}>
                        {format(weekday, 'EEE', {
                            locale: langMap[i18n.language],
                        })}
                    </span>
                ))}
            </div>
            <div className={styles.calendarDays}>
                {calendarDays.map((calendarDay: DateInMonth, index: number) => (
                    <CalendarDay
                        key={`${calendarDay.day.getDate()}-%${index}`}
                        calendarDay={calendarDay}
                    />
                ))}
            </div>
        </div>
    )
}

export default BigCalendar
