import React from 'react'
import { Props } from './types'
import styles from './tag.scss'
import Computer from '../../icons/computer-24px.svg'
import Music from '../../icons/audiotrack-24px.svg'
import Art from '../../icons/color_lens-24px.svg'
import Sport from '../../icons/sports_baseball-24px.svg'

const colorMap: { [key: string]: string } = {
    Programming: '#bb86fc',
    Art: '#ff57bb',
    Music: '#03dac6',
    Sports: ' #00b0ff',
}

const iconMap: { [key: string]: JSX.Element } = {
    Programming: <Computer />,
    Art: <Art />,
    Music: <Music />,
    Sports: <Sport />,
}

const Tag: React.FC<Props> = ({ tagTitle }: Props) => {
    return (
        <div
            className={styles.tag}
            style={{ backgroundColor: colorMap[tagTitle] }}
        >
            {iconMap[tagTitle]}
            <span>{tagTitle}</span>
        </div>
    )
}

export default Tag
