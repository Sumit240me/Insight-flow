import {z} from "zod";

export const messageSchema = z.object({
    content: z
     .string()
     .min(10,{message: 'Content must be at leaast of 10 characters'})
     .max(300,{message: 'Content must be within 300 characters'} )
    
})