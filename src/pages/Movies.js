import React, { useEffect, useContext } from 'react'
import { Filter } from '../components/filter/Filter'
import { MainLayout } from '../components/layout/MainLayout'
import { DataContext } from '../context/data/DataContext'

export const Movies = () => {
  const { movies, onLoadData } = useContext(DataContext)

  useEffect(() => {
    onLoadData('movie')
  }, [])
  return (
    <MainLayout>
      <Filter category='movie' />
      <h1>movies</h1>
      {
        movies && movies.map(serie => (
          <div key={serie.title}>{serie.title}</div>
        ))
      }
    </MainLayout>
  )
}
