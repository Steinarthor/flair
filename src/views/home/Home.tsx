import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Header from '../../components/header/header'
import Calendar from '../../components/calendar/Calendar'
import EventList from '../../components/eventList/EventList'
import styles from './home.scss'

const Home: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <main className={styles.home}>
                <Calendar />
                <EventList />
            </main>
        </>
    )
}

export default Home
