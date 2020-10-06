import React, { useState } from 'react'
import { is, enGB } from 'date-fns/locale'
import {
    addMonths,
    subMonths,
    format,
    add,
    sub,
    getYear,
    isSameDay,
} from 'date-fns'
import { useTranslation } from 'react-i18next'
import { useDispatch } from '../../context/Context'
import { constructMonthDays, constructWeekDays } from './utils'
import { DateInMonth } from './calendarDay/types'
import CalendarDay from './calendarDay/CalendarDay'
import Arrow from '../../icons/play_arrow-24px.svg'
import styles from './calendar.scss'

const langMap: { [key: string]: Locale } = { is: is, gb: enGB }

const Calendar: React.FC = () => {
    const { i18n } = useTranslation()
    const weekdays = constructWeekDays(i18n.language)
    const datesInMonth = constructMonthDays(new Date())
    const dispatch = useDispatch()
    const [calendarState, setCalendarState] = useState({
        month: new Date(),
        year: getYear(new Date()),
        calendarDays: datesInMonth,
        selectedDate: new Date(0),
        dayInfocus: new Date(),
    })
    const nextMonth = () => {
        const next = addMonths(calendarState.month, 1)
        setCalendarState({
            month: next,
            year: getYear(next),
            calendarDays: constructMonthDays(next),
            selectedDate: calendarState.selectedDate,
            dayInfocus: calendarState.dayInfocus,
        })
    }
    const previousMonth = () => {
        const prev = subMonths(calendarState.month, 1)
        setCalendarState({
            month: prev,
            year: getYear(prev),
            calendarDays: constructMonthDays(prev),
            selectedDate: calendarState.selectedDate,
            dayInfocus: calendarState.dayInfocus,
        })
    }
    const keyboardNavigation = ({ key }: React.KeyboardEvent, day: Date) => {
        // BUG: Should limit to add or subtract to the month in view.
        switch (key) {
            case 'ArrowRight':
                setCalendarState({
                    ...calendarState,
                    dayInfocus: add(calendarState.dayInfocus, { days: 1 }),
                })
                break
            case 'ArrowDown':
                setCalendarState({
                    ...calendarState,
                    dayInfocus: add(calendarState.dayInfocus, { days: 7 }),
                })
                break
            case 'ArrowLeft':
                setCalendarState({
                    ...calendarState,
                    dayInfocus: sub(calendarState.dayInfocus, { days: 1 }),
                })
                break
            case 'ArrowUp':
                setCalendarState({
                    ...calendarState,
                    dayInfocus: sub(calendarState.dayInfocus, { days: 7 }),
                })
                break
            case 'Enter':
                setCalendarState({
                    ...calendarState,
                    selectedDate: day,
                    dayInfocus: day,
                })
                dispatch({
                    type: 'SET_SELECTED_DAY',
                    payload: {
                        calendar: {
                            selectedDate: day,
                            hasSelected: true,
                        },
                    },
                })
                break

            default:
                break
        }
    }

    const selectDay = (day: Date) => {
        setCalendarState({
            ...calendarState,
            selectedDate: day,
            dayInfocus: day,
        })
        dispatch({
            type: 'SET_SELECTED_DAY',
            payload: {
                calendar: {
                    selectedDate: day,
                    hasSelected: true,
                },
            },
        })
    }

    const { month, year, calendarDays, selectedDate } = calendarState
    return (
        <div className={styles.calendar}>
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
                        selectedDay={selectedDate}
                        keyboardNavigation={keyboardNavigation}
                        onClick={selectDay}
                        inFocus={isSameDay(
                            calendarDay.day,
                            calendarState.dayInfocus
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default Calendar
