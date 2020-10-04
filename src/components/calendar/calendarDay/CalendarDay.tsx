import React, { useRef, useEffect } from 'react'
import { Props } from './types'
import { format, isSameDay } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { useDispatch, useContext } from '../../../context/Context'
import classNames from 'classnames/bind'
import styles from './calendarDay.scss'
import { enGB, is } from 'date-fns/locale'
const cx = classNames.bind(styles)

const langMap: { [key: string]: Locale } = { is: is, gb: enGB }

const CalendarDay: React.FC<Props> = ({
    calendarDay,
    keyboardNavigation,
    inFocus,
}: Props) => {
    const { i18n } = useTranslation()
    const context = useContext()
    const dispatch = useDispatch()
    const node = useRef<HTMLDivElement>(null)
    const selectDay = () => {
        dispatch({
            type: 'SET_SELECTED_DAY',
            payload: {
                calendar: {
                    selectedDate: calendarDay.day,
                    hasSelected: true,
                },
            },
        })
    }
    useEffect(() => {
        if (inFocus && node.current !== null) {
            node.current.focus()
        }
    })
    return (
        <div
            ref={node}
            className={cx('calendarDay', {
                dateInPast: calendarDay.dateInPast,
                dateInFuture: calendarDay.dateInFuture,
                selected: isSameDay(
                    calendarDay.day,
                    context.calendar.selectedDate
                ),
            })}
            role="button"
            tabIndex={0}
            onKeyDown={keyboardNavigation}
            onKeyPress={selectDay}
            onClick={selectDay}
        >
            <span>
                {format(calendarDay.day, 'd', {
                    locale: langMap[i18n.language],
                })}
            </span>
        </div>
    )
}

export default CalendarDay
