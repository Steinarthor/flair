import React from 'react'
import { Props } from './types'
import styles from './styles.scss'

const tagMap = {
    art: '#00b0ff',
    books: '#ffb300',
    dance: '#ff1744',
    film: '#03dac6',
    'food and drink': '#aa00ff',
    music: '#536dfe',
    programming: '#e17055',
    sports: '#ff57bb',
}

const Tag: React.FC<Props> = ({ category }: Props) => {
    return (
        <span
            className={styles.tag}
            style={{
                backgroundColor: tagMap[category],
            }}
        >
            {category}
        </span>
    )
}

export default Tag
