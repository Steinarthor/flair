import React from 'react'
import Location from '../../icons/location_on-24px.svg'
import { Link } from '@reach/router'
import { Props } from './types'
import styles from './project.scss'

const Project: React.FC<Props> = ({
    name,
    description,
    location,
    date,
    color,
    id,
    category,
}) => {
    return (
        <div
            className={styles.project}
            style={{ border: `1px solid ${color}` }}
        >
            <h3 className={styles.title}>{name}</h3>
            <time className={styles.time}>{date}</time>
            <div className={styles.description}>{description}</div>
            <div className={styles.cta}>
                <span className={styles.location}>
                    <Location /> {location}
                </span>
                <Link
                    to={`/projects/${category.toLocaleLowerCase()}/${id}`}
                    className={styles.link}
                >
                    <span className={styles.ctaButton} style={{ color: color }}>
                        View info
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Project
