import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Filter } from '../components/filter/Filter'
import { MainLayout } from '../components/layout/MainLayout'
import { DataContext } from '../context/data/DataContext'

export const Series = () => {

  const { series, onLoadData } = useContext(DataContext)

  useEffect(() => {
    onLoadData('series')
  }, [])

  return (
    <MainLayout>
      <Filter category='series' />
      <h1>Popular Series</h1>
      {
        series && series.map(serie => (
          <div key={serie.title}>{serie.title}</div>
        ))
      }
    </MainLayout>
  )
}
