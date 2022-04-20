import React from 'react'

import { Filter } from '../components/filter/Filter'
import { MainLayout } from '../components/layout/MainLayout'
import { ProductList } from '../components/product/ProductList'

export const Series = () => {

 

  return (
    <MainLayout>
      <Filter category='series' />
      <h1>Popular Series</h1>
      <ProductList type='series'/>
    </MainLayout>
  )
}
