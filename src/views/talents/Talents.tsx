import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from '@reach/router'

const Talents: React.FC<RouteComponentProps> = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('Talents')}</h1>
        </div>
    )
}

export default Talents
