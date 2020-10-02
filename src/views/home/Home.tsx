import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from '@reach/router'
import Header from '../../components/header/header'
import BigCalendar from '../../components/bigCalendar/BigCalendar'
import CalendarDayDetails from '../../components/bigCalendar/calendarDayDetails/CalendarDayDetials'
import styles from './home.scss'

const Home: React.FC<RouteComponentProps> = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <main className={styles.home}>
                <BigCalendar />
                <CalendarDayDetails />
            </main>
        </>
    )
}

export default Home
