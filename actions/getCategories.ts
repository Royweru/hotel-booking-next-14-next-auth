"use server"
import {prisma} from '@/lib/prismadb'
export const GetCategories =async () => {
   try {
     const res = await prisma.category.findMany({
        include:{
            rooms:true
        },
        orderBy:{
            createdAt:"asc"
        }
     })

     return res
   } catch (error) {
      console.error(error)
      return null
   }
}
