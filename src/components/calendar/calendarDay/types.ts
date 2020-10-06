export interface DateInMonth {
    day: Date
    dateInPast: boolean
    dateInFuture: boolean
}

export interface Props {
    calendarDay: DateInMonth
    inFocus: boolean
    selectedDay: Date
    keyboardNavigation: (event: React.KeyboardEvent, day: Date) => void
    onClick: (day: Date) => void
}
