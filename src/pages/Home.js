import React from 'react'
import { Categories } from '../components/Categories'

import { HomeLayout } from '../components/layout/HomeLayout'

export const Home = () => {
    return (
        <HomeLayout>
            <Categories />
        </HomeLayout>
    )
}
