import React, { useEffect, useContext } from 'react'
import { DataContext } from '../../context/data/DataContext'
import { ProductCard } from './ProductCard'
import { usePaginate } from '../../hooks/usePaginate'

export const ProductList = ({ type }) => {

  const { movies, series, onLoadData } = useContext(DataContext)

  const data = type === 'movie' ? movies : series

  const { currentData, currentPage, totalPages, paginate } = usePaginate(data, 10)

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  useEffect(() => {
    onLoadData(type)
  }, [])

  return (
    <div className='product'>
      <div className="product__container">
        {
          currentData && currentData.map(serie => (
            <ProductCard key={serie.title} product={serie} />
          ))
        }
      </div>
      {
        totalPages > 1 && (
          <div className="product__pagination">
            <button className="product__pagination__prev" onClick={() => paginate(currentPage - 1)}> </button>
            <ul className="product__pagination__list">
              {
                pages.map(page => (
                  <li onClick={() => paginate(page)} className={`product__pagination__item ${currentPage === page ? 'item_active' : undefined} `}>{page}</li>
                ))
              }
            </ul>

            <button className="product__pagination__next" onClick={() => paginate(currentPage + 1)}></button>
          </div>
        )
      }
    </div>
  )
}
