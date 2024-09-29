import * as z from 'zod'


export const LoginSchema = z.object({
    email:z.string().min(3,{
        message:"Message is required"
    }),
    password:z.string().min(8,{
        message:"Password should have at least 8 characters"
    })
})
export const SignupSchema = z.object({
    email:z.string().min(3,{
        message:"Message is required"
    }),
    name:z.string().min(3,{
        message:"Message is required"
    }),
    password:z.string().min(8,{
       message:"Password should have at least 8 characters"
    })
})