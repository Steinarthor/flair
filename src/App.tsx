import { hot } from 'react-hot-loader/root'
import React from 'react'
import { useContext } from './context/Context'
import Header from './components/header/header'
import Router from './router'
import styles from './app.scss'

const App = () => {
    const context = useContext()
    console.log(`App context ${context.theme}`)
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
