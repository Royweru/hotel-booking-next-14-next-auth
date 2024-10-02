import {prisma} from '@/lib/prismadb'

export const GetCategory =async (categoryId:string) => {
     try {
        const res = await prisma.category.findUnique({
            where:{
                id:categoryId
            },
            include:{
                rooms:true
            },
        })
      return res
     } catch (error) {
        console.error(error)
        return null
     }
}
