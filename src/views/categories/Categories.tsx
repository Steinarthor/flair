import React from 'react'
import classNames from 'classnames/bind'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, Link } from '@reach/router'
import { CategoryBox } from './types'
import Header from '../../components/header/header'
import styles from './categories.scss'
const cx = classNames.bind(styles)
const categoryBox: CategoryBox[] = [
    {
        name: 'Film',
        url: 'film',
        color: '#03dac6',
        smallBoxes: [
            {
                name: 'Music',
                url: 'music',
                color: '#00B0FF',
            },
            {
                name: 'Art',
                url: 'art',
                color: '#FFA000',
            },
        ],
    },
    {
        name: 'Photography',
        url: 'photography',
        color: '#AA00FF',
        smallBoxes: [
            {
                name: 'Design',
                url: 'design',
                color: '#FF1744',
            },
            {
                name: 'Architecture',
                url: 'architecture',
                color: '#536DFE',
            },
        ],
    },
]

const Categories: React.FC<RouteComponentProps> = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <main className={styles.categories}>
                {' '}
                <div className={styles.categoryNav}>
                    {categoryBox.map(
                        ({ name, smallBoxes, color, url }: CategoryBox, i) => {
                            return (
                                <div
                                    key={`${name}-${i}`}
                                    className={cx({
                                        categoryBoxRow: true,
                                        reverse: i === 1,
                                    })}
                                >
                                    <Link
                                        to={`/categories/${url}`}
                                        className={styles.link}
                                    >
                                        <div
                                            className={cx({
                                                categoryBigBox: true,
                                                film: i === 0,
                                                camera: i === 1,
                                            })}
                                            style={{
                                                backgroundColor: color,
                                            }}
                                        >
                                            <span>{name}</span>
                                        </div>
                                    </Link>
                                    <div className={styles.categorySmallBoxes}>
                                        {smallBoxes?.map(
                                            ({ name, color, url }, idx) => {
                                                return (
                                                    <Link
                                                        key={`${name}-${idx}`}
                                                        to={`/categories/${url}`}
                                                        className={styles.link}
                                                    >
                                                        <div
                                                            className={cx({
                                                                smallBox: true,
                                                                music:
                                                                    i === 0 &&
                                                                    idx === 0,
                                                                art:
                                                                    i === 0 &&
                                                                    idx === 1,
                                                                design:
                                                                    i === 1 &&
                                                                    idx === 0,
                                                                architecture:
                                                                    i === 1 &&
                                                                    idx === 1,
                                                            })}
                                                            style={{
                                                                backgroundColor: color,
                                                            }}
                                                        >
                                                            <span>{name}</span>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </main>
        </>
    )
}

export default Categories
