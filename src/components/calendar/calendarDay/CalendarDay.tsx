import React, { useRef, useEffect } from 'react'
import { Props } from './types'
import { format, isBefore, isSameDay, isToday } from 'date-fns'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames/bind'
import styles from './calendarDay.scss'
import { enGB, is } from 'date-fns/locale'
const cx = classNames.bind(styles)

const langMap: { [key: string]: Locale } = { is: is, gb: enGB }

const CalendarDay: React.FC<Props> = ({
    calendarDay,
    selectedDay,
    keyboardNavigation,
    onClick,
    inFocus,
}: Props) => {
    const { i18n } = useTranslation()
    const node = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (inFocus && node.current !== null) {
            node.current.focus()
        }
    })
    return (
        <div
            ref={node}
            className={cx('calendarDay', {
                dateInPast:
                    isBefore(calendarDay.day, new Date()) &&
                    !isToday(calendarDay.day),
                dateInFuture: calendarDay.dateInFuture,
                selected: isSameDay(calendarDay.day, selectedDay),
                today: isToday(calendarDay.day),
            })}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => keyboardNavigation(event, calendarDay.day)}
            onClick={() => onClick(calendarDay.day)}
        >
            <span className={styles.dayNumber}>
                {format(calendarDay.day, 'd', {
                    locale: langMap[i18n.language],
                })}
            </span>
        </div>
    )
}

export default CalendarDay
