import { hot } from 'react-hot-loader/root'
import React from 'react'
import classNames from 'classnames/bind'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary'
import { useContext } from './context/Context'
import Router from './router'
import styles from './app.scss'
const cx = classNames.bind(styles)

const App = () => {
    const context = useContext()
    return (
        <div
            className={cx({
                app: true,
                light: context.theme === 'light',
                dark: context.theme === 'dark',
            })}
        >
            <ErrorBoundary>
                <Router />
            </ErrorBoundary>
        </div>
    )
}

export default hot(App)
