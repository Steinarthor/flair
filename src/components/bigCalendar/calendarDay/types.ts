export interface DateInMonth {
    day: Date
    dateInPast: boolean
    dateInFuture: boolean
}

export interface Props {
    calendarDay: DateInMonth
}
