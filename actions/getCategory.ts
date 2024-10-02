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

        const safeRes = res?.rooms.map((room)=>{
            const modifiedRoom =  room.price.toNumber()
            const rating = room.rating?.toFixed()
            return {
                ...room,
                price:modifiedRoom,
                rating
            }
        }
    )
      return {
        ...res,
        rooms:safeRes
      }
     } catch (error) {
        console.error(error)
        return null
     }
}
