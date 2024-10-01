import { Category, Room } from '@prisma/client'
import React from 'react'
import { CategoriesGrid } from './categories-grid'

interface CategorySectionProps{
  categories:(
    Category&{
      rooms:Room[]
    }
  )[]|null
}
export const CategorySection = ({categories}:CategorySectionProps) => {
  return (
    <div className=' w-full relative px-4 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16'>
        <div className=' font-semibold text-4xl md:text-5xl lg:text-6xl text-emerald-600 text-center'>
            <h2 className='leading-snug  my-3'>
              Explore our different categories of rooms
            </h2>
        </div>
        <CategoriesGrid categories={categories} />
    </div>
  )
}

