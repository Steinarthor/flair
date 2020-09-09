import React from 'react'
import { Router as ReachRouter } from '@reach/router'

// Routes
import Projects from './views/projects/Projects'
import Talents from './views/talents/Talents'
import Home from './views/home/Home'

const Router: React.FC = () => {
    return (
        <ReachRouter>
            <Projects path="/projects" />
            <Talents path="/talents" />
            <Home default />
        </ReachRouter>
    )
}

export default Router
