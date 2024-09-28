import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from '@/lib/prismadb'
export const authOptions:NextAuthOptions ={
    adapter:PrismaAdapter(prisma),
    providers:[]
}