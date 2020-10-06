import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Header from '../../components/header/header'
import Calendar from '../../components/calendar/Calendar'
import CalendarDayDetails from '../../components/calendar/calendarDayDetails/CalendarDayDetails'
import styles from './home.scss'

const Home: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <main className={styles.home}>
                <Calendar />
                <CalendarDayDetails />
            </main>
        </>
    )
}

export default Home
