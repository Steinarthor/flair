import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Header from '../../components/header/header'
import styles from './talents.scss'

const Talents: React.FC<RouteComponentProps> = () => {
    return (
        <>
            <Header />
            <main className={styles.talents}>
                <div>Talents</div>
            </main>
        </>
    )
}

export default Talents
