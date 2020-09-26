import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Header from '../../components/header/header'
import styles from './notFound.scss'

const NotFound: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <main className={styles.notFound}>Not Found</main>
        </>
    )
}

export default NotFound
