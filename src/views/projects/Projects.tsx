import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from '@reach/router'

const Projects: React.FC<RouteComponentProps> = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('Projects')}</h1>
        </div>
    )
}

export default Projects
