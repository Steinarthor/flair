import React, { lazy, Suspense } from 'react'
import { Router as ReachRouter } from '@reach/router'

// Routes
//const Talents = lazy(() => import('./views/talents/Talents'))
const PrivateRoute = lazy(
    () => import('./components/privateRoute/PrivateRoute')
)
const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
const Home = lazy(() => import('./views/home/Home'))
const Login = lazy(() => import('./views/login/Login'))
const NotFound = lazy(() => import('./views/notFound/NotFound'))

const Router: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <>
                <ReachRouter style={{ height: '100%' }}>
                    {/*<Talents path="/talents" />*/}
                    <Home path="/" />
                    <Login path="/login" />
                    <PrivateRoute as={Dashboard} path="/dashboard" />
                    <NotFound default />
                </ReachRouter>
            </>
        </Suspense>
    )
}

export default Router
