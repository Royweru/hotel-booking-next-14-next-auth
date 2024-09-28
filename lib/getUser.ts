import {prisma} from "@/lib/prismadb"

export const getUserByEmail = async (email:string) => {
    const checkEmail = await prisma.user.findUnique({
        where:{
            email
        }
    })
 if(checkEmail) return {message:"Email already exists"}  
}
export const getUserById = async (id:string) => {
    const checkId = await prisma.user.findUnique({
        where:{
           id
        }
    })
 if(checkId) return {message:" user Id already exists"}  
}