import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import {prisma} from "@/lib/prismadb"

import { getUserByEmail } from "@/lib/getUser"
export async function POST(
    req:Request,

) {
    const body = await req.json()

    try {
        const {
           name,
           email,
           password
        } = body

       if(!email ) return new NextResponse("Name is needed!",{status:404})
       if(!password ) return new NextResponse("password is needed!",{status:404})
        
       getUserByEmail(email)
    
      const hashedPassword = await bcrypt.hash(password,10)

      const res = await prisma.user.create({
        data:{
           name,
           email,
           hashedPassword 
        }
      })

      return NextResponse.json(res)
    } catch (error) {
      console.log(error)
      return new NextResponse("Error while registering user",{status:500})  
    }
}