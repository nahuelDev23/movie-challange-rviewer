import React, { useContext } from 'react'
import { UiContext } from '../../context/ui/UiContext'

export const Filter = ({ category = 'movies' }) => {

    const { isOpenFilter } = useContext(UiContext)
    return (
        <>
            {
                isOpenFilter && (
                    <div className={`filter`}>
                        <form className='filter__form'>
                            <input className='filter__inputtext' type="text" placeholder='Name' />
                            <input className='filter__inputdate' type="date" />
                        </form>
                    </div>
                )
            }
        </>
    )
}
