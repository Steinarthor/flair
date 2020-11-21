import React from 'react'
import { Props, Attendee } from './types'
import styles from './attendance.scss'

const Attendance: React.FC<Props> = ({ attendees }: Props) => {
    return (
        <div className={styles.attendees}>
            {attendees.slice(0, 3).map((attendee: Attendee) => {
                return (
                    <span key={attendee.id} className={styles.attendee}>
                        {attendee.firstName[0]}
                    </span>
                )
            })}
            <span className={styles.attendeesRest}>
                {`+${attendees.length - 3}`}
            </span>
        </div>
    )
}

export default Attendance
