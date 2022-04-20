import React from 'react'
import { Filter } from '../components/filter/Filter'
import { MainLayout } from '../components/layout/MainLayout'
import { ProductList } from '../components/product/ProductList'


export const Movies = () => {
 
  return (
    <MainLayout>
      <Filter category='movie' />
      <h1>Popular Movies</h1>
      <ProductList type='movie' />
    </MainLayout>
  )
}
