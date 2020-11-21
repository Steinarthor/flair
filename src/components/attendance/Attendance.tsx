import React from 'react'
import classNames from 'classnames/bind'
import { Props, Attendee } from './types'
import styles from './attendance.scss'
const cx = classNames.bind(styles)

const Attendance: React.FC<Props> = ({
    attendees,
    moveLeft,
    moveRight,
}: Props) => {
    return (
        <div className={styles.attendees}>
            {attendees.slice(0, 3).map((attendee: Attendee) => {
                return (
                    <span
                        key={attendee.id}
                        className={cx('attendee', {
                            left: moveLeft,
                            right: moveRight,
                        })}
                    >
                        {attendee.firstName[0]}
                    </span>
                )
            })}
            <span className={cx('attendeesRest', { restLeft: moveLeft })}>
                {`+${attendees.length - 3}`}
            </span>
        </div>
    )
}

export default Attendance
