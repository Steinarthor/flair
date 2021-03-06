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

const Tag: React.FC<Props> = ({
    invert,
    category,
    isSelected,
    handleClick,
    onKeyPress,
}: Props) => {
    if (invert) {
        return (
            <span
                className={styles.tag}
                style={{
                    border: `1px solid ${tagMap[category]}`,
                    backgroundColor: isSelected
                        ? tagMap[category]
                        : 'transparent',
                    color: isSelected ? '#fff' : tagMap[category],
                }}
                onClick={() => {
                    handleClick && handleClick(category)
                }}
                onKeyPress={() => {
                    onKeyPress && onKeyPress(category)
                }}
                role="button"
                tabIndex={0}
            >
                {category}
            </span>
        )
    } else {
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
}

export default Tag
