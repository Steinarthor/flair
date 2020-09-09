import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './components/header/header'
import Router from './router'
import styles from './app.scss'

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <section className={styles.mainSection}>
                <Router />
            </section>
        </div>
    )
}

export default hot(App)
