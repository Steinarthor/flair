import React, { lazy, Suspense } from 'react'
import { Router as ReachRouter } from '@reach/router'

// Routes
const Talents = lazy(() => import('./views/talents/Talents'))
const Categories = lazy(() => import('./views/categories/Categories'))
const Category = lazy(() => import('./views/category/Category'))
const Home = lazy(() => import('./views/home/Home'))

const Router: React.FC = () => {
    return (
        <Suspense fallback={<div>Loadin...</div>}>
            <>
                <ReachRouter style={{ height: '100%' }}>
                    <Talents path="/talents" />
                    <Categories path="/categories" />
                    <Category path="/categories/:category" />
                    <Home default />
                </ReachRouter>
            </>
        </Suspense>
    )
}

export default Router
