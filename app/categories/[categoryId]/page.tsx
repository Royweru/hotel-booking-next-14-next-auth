import { GetCategory } from '@/actions/getCategory'
import React from 'react'
import { RoomsGrid } from './_components/rooms-grid'
import { Bed } from 'lucide-react'
import { PersonIcon } from '@radix-ui/react-icons'

const CategoryIdPage = async({params}:{
    params:{categoryId:string}
}) => {
    const category = await GetCategory(params.categoryId)

    const guests = category?.beds === 1 ? 2 :category?.beds ===2 ? 4 : 8

  return (
    <div className=' w-full min-h-screen md:p-16 lg:p-20 p-4'>
        <div className=' grid w-full grid-cols-5 md:grid-cols-10 lg:grid-cols-12 gap-2 md:gap-4'>
          <div className=' col-span-5 md:col-span-4 lg:col-span-5 flex flex-col gap-y-2'>
             <p className=' text-sm font-semibold text-black font-mono'>
                Category
             </p>
             <h2 className=' text-6xl lg:text-7xl font-bold max-w-md leading-snug text-text-primary'>
                 {category?.name}
             </h2>
             <p className=' md:text-md font-normal  text-sm leading-relaxed font-mono'>
            {category?.description}
             </p>
             <div className=' flex px-2 md:px-3 w-full items-center justify-center gap-x-2 mt-2'>
                <div className=' font-mono font-bold text-sm flex items-center justify-center w-full relative'>
                <Bed  className=' size-7 font-bold text-green-600 mr-3'/>
                <span className=' text-md font-bold font-montserrat '>
                {category?.beds}
                </span> 
                </div>
                <div className=' font-mono font-bold text-sm flex items-center justify-center w-full relative'>
                <PersonIcon  className=' size-7 font-bold text-cyan-500 mr-3'/>
                <span className='text-md font-bold font-montserrat'>
                {guests}
                </span> 
                </div>
             
             </div>
          </div>
          <div  className='
           col-span-5  md:cols-span-6 lg:col-span-7
          '>
           <RoomsGrid rooms={category?.rooms} />
          </div>
        </div>
    </div>
  )
}

export default CategoryIdPage