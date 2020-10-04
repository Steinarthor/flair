import {
    addDays,
    endOfMonth,
    endOfWeek,
    getDay,
    isAfter,
    isBefore,
    startOfMonth,
    startOfWeek,
    subDays,
} from 'date-fns'
import { is, enGB } from 'date-fns/locale'
import { DateInMonth } from '../calendar/calendarDay/types'
const langMap: { [key: string]: Locale } = { is: is, gb: enGB }

export const constructWeekDays = (locale: string): Date[] => {
    let start = startOfWeek(new Date(), {
        weekStartsOn: 0,
        locale: langMap[locale],
    })
    const end = endOfWeek(start, { weekStartsOn: 0, locale: langMap[locale] })
    const weekdays: Date[] = []

    while (isBefore(start, end)) {
        start = addDays(start, 1)
        weekdays.push(start)
    }
    return weekdays
}

export const constructMonthDays = (startDay: Date): DateInMonth[] => {
    const firstDayOfMonth = startOfMonth(startDay)
    const lastDayOfMonth = endOfMonth(startDay)
    const lastDayOfMonthIndex = getDay(lastDayOfMonth)
    const weekdayStartIndex =
        getDay(firstDayOfMonth) === 0 ? 0 : getDay(firstDayOfMonth) - 1
    const monthDays: DateInMonth[] = []

    let start = subDays(firstDayOfMonth, weekdayStartIndex)
    const end = addDays(lastDayOfMonth, 7 - lastDayOfMonthIndex)

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
