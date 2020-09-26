import React, { lazy, Suspense } from 'react'
import { Router as ReachRouter } from '@reach/router'

// Routes
const Talents = lazy(() => import('./views/talents/Talents'))
const Categories = lazy(() => import('./views/categories/Categories'))
const Category = lazy(() => import('./views/category/Category'))
const Home = lazy(() => import('./views/home/Home'))
const NotFound = lazy(() => import('./views/notFound/NotFound'))

const Router: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <>
                <ReachRouter style={{ height: '100%' }}>
                    <Talents path="/talents" />
                    <Categories path="/categories" />
                    <Category path="/categories/:category" />
                    <Home path="/" />
                    <NotFound default />
                </ReachRouter>
            </>
        </Suspense>
    )
}

export default Router
