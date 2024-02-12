import React from 'react'
import portfolio from '../data/portfolio'
import { PortfolioItem } from './PortfolioItem'

export const Portfolio: React.FC = () => {

    return (
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'></div>
        </div>
    )
}