export interface DateInMonth {
    day: Date
    dateInPast: boolean
    dateInFuture: boolean
}

export interface Props {
    calendarDay: DateInMonth
    inFocus: boolean
    keyboardNavigation: (event: React.KeyboardEvent) => void
}
