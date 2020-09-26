import React from 'react'
import { RouteComponentProps, useParams } from '@reach/router'
import Header from '../../components/header/header'
import CategoryFilter from '../../components/categoryFilter/CategoryFilter'
import styles from './category.scss'

const Category: React.FC<RouteComponentProps> = () => {
    const params = useParams()

    return (
        <>
            <Header />{' '}
            <main className={styles.category}>
                <CategoryFilter />
            </main>
        </>
    )
}

export default Category
