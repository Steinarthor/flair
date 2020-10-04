import React from 'react'
import { Props } from './types'
import styles from './tag.scss'

const colorMap: { [key: string]: string } = {
    Programming: '#bb86fc',
    Art: '#ff57bb',
    Music: '#03dac6',
    Sports: ' #00b0ff',
}

const Tag: React.FC<Props> = ({ tagTitle }: Props) => {
    return (
        <span
            className={styles.tag}
            style={{ backgroundColor: colorMap[tagTitle] }}
        >
            {tagTitle}
        </span>
    )
}

export default Tag
