import React, { lazy, Suspense } from 'react'
import { Router as ReachRouter } from '@reach/router'

// Routes
//const Talents = lazy(() => import('./views/talents/Talents'))
const Event = lazy(() => import('./views/event/Event'))
const Home = lazy(() => import('./views/home/Home'))
const NotFound = lazy(() => import('./views/notFound/NotFound'))

const Router: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <>
                <ReachRouter style={{ height: '100%' }}>
                    {/*<Talents path="/talents" />*/}
                    <Home path="/" />
                    <Event path="/:city/:category/:event" />
                    <NotFound default />
                </ReachRouter>
            </>
        </Suspense>
    )
}

export default Router
