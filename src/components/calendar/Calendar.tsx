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
    getMonth,
    getDate,
} from 'date-fns'
import { useQuery } from '@apollo/client'
import { EVENTS } from '../../queries/events'
import { useTranslation } from 'react-i18next'
import { useContext, useDispatch } from '../../context/Context'
import { constructMonthDays, constructWeekDays } from './utils'
import { DateInMonth } from './calendarDay/types'
import { Event, Category } from './calendarEvents/types'
import CalendarDay from './calendarDay/CalendarDay'
import CalendarEvents from './calendarEvents/CalendarEvents'
import Arrow from '../../icons/play_arrow-24px.svg'
import styles from './calendar.scss'

const langMap: { [key: string]: Locale } = { is: is, gb: enGB }
const tags = new Set<Category>()

const uniqueTags = (events: Event[]): Category[] => {
    const uniqueTag = new Set<Category>()

    for (const event of events) {
        if (uniqueTag.has(event.category)) {
            continue
        } else {
            uniqueTag.add(event.category)
        }
    }
    return [...uniqueTag]
}

const Calendar: React.FC = () => {
    const context = useContext()
    const dispatch = useDispatch()
    const datesInMonth = constructMonthDays(new Date())
    const [calendarState, setCalendarState] = useState({
        month: new Date(),
        year: getYear(new Date()),
        calendarDays: datesInMonth,
        selectedDate: new Date(),
        dayInfocus: new Date(),
    })
    const [filterEventsByTag, toggleEventsByTag] = useState<Event[]>([])
    const { loading, error, data } = useQuery(EVENTS, {
        //pollInterval: 500,
        variables: {
            location: context.location,
            month: getMonth(calendarState.selectedDate),
            date: getDate(calendarState.selectedDate),
        },
        onCompleted: (data) => {
            toggleEventsByTag(data.events)
            setEventTags(uniqueTags(data.events))
        },
    })
    const { i18n } = useTranslation()
    const weekdays = constructWeekDays(i18n.language)
    const [selectedTags, selectTag] = useState<Category[]>([])
    const [eventTags, setEventTags] = useState<Category[]>([])

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

    const handleTagSelection = (category: Category) => {
        if (tags.has(category) && tags.size > 0) {
            tags.delete(category)
        } else {
            tags.add(category)
        }
        const filterDataByTag = data.events.filter((event: Event) =>
            tags.has(event.category)
        )
        selectTag([...tags])
        toggleEventsByTag(filterDataByTag)

        if (tags.size === 0) {
            toggleEventsByTag(data.events)
        }
    }

    const { month, year, calendarDays, selectedDate } = calendarState

    if (loading) {
        return <div>...Loading</div>
    }

    if (error) {
        console.error(error)
        return <div>Something wrong happent</div>
    }

    return (
        <div className={styles.calendar}>
            <div className={styles.calendarContainer}>
                <div className={styles.calendarNavigation}>
                    <button onClick={previousMonth}>
                        {' '}
                        <Arrow className={styles.arrowBack} />
                    </button>
                    <span className={styles.month}>
                        {format(month, 'MMMM', {
                            locale: langMap[i18n.language],
                        })}{' '}
                        {year}
                    </span>
                    <button onClick={nextMonth}>
                        <Arrow className={styles.arrowForward} />
                    </button>
                </div>
                <div className={styles.weekdays}>
                    {weekdays.map((weekday) => (
                        <span
                            key={weekday.getDate()}
                            className={styles.weekday}
                        >
                            {format(weekday, 'EEE', {
                                locale: langMap[i18n.language],
                            })}
                        </span>
                    ))}
                </div>
                <div className={styles.calendarDays}>
                    {calendarDays.map(
                        (calendarDay: DateInMonth, index: number) => (
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
                        )
                    )}
                </div>
            </div>
            <CalendarEvents
                events={filterEventsByTag}
                eventTags={eventTags}
                handleTagSelection={handleTagSelection}
                selectedTags={selectedTags}
            />
        </div>
    )
}

export default Calendar
