import React, { useEffect } from 'react'
import { useContext } from '../../../context/Context'
import { format } from 'date-fns'
import classNames from 'classnames/bind'
import styles from './calendarDayDetails.scss'
const cx = classNames.bind(styles)

const CalendarDayDetails: React.FC = () => {
    const context = useContext()

    return (
        <div
            className={cx('calendarDayDetails', {
                showDetails: context.calendar.hasSelected,
            })}
        >
            <h2>{format(context.calendar.selectedDate, 'EEE dd MMM yyyy')}</h2>
        </div>
    )
}

export default CalendarDayDetails
