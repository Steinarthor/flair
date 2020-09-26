import React from 'react'
import {Props} from "./types"
import styles from "./categoryFilter.scss"

const constructTitle = () => {}

const CategoryFilter: React.FC<Props> = ({categoryName}) => {
    return <div className={styles.categoryFilter}>CategoryFilter</div>
}

export default CategoryFilter;