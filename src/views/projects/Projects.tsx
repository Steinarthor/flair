import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from '@reach/router'
import Project from '../../components/project/Project'
import Header from '../../components/header/header'
import styles from './projects.scss'

// Mocks
import { Projects as ProjectType } from './types'
import { projects } from './mocks'

const Projects: React.FC<RouteComponentProps> = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <main className={styles.projects}>
                {projects.map(
                    ({ category, projects, color }: ProjectType, i) => (
                        <div key={`${category}-{i}`}>
                            <h1>{category}</h1>
                            <div className={styles.projectCatetory}>
                                {projects.map(
                                    ({
                                        name,
                                        location,
                                        description,
                                        date,
                                        id,
                                    }) => (
                                        <Project
                                            key={`${name}-${1}`}
                                            id={id}
                                            name={name}
                                            location={location}
                                            description={description}
                                            color={color}
                                            date={date}
                                            category={category}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
            </main>
        </>
    )
}

export default Projects
