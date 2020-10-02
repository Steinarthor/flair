import React from 'react'
import { Props } from './types'
import { format, isSameDay } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { useDispatch, useContext } from '../../../context/Context'
import classNames from 'classnames/bind'
import styles from './calendarDay.scss'
import { enGB, is } from 'date-fns/locale'
const cx = classNames.bind(styles)

const langMap: { [key: string]: Locale } = { is: is, gb: enGB }

const CalendarDay: React.FC<Props> = ({ calendarDay }) => {
    const { i18n } = useTranslation()
    const context = useContext()
    const dispatch = useDispatch()
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
    return (
        <div
            className={cx('calendarDay', {
                dateInPast: calendarDay.dateInPast,
                dateInFuture: calendarDay.dateInFuture,
                selected: isSameDay(
                    calendarDay.day,
                    context.calendar.selectedDate
                ),
            })}
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
