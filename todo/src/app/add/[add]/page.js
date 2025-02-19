"use client"

import { z } from "zod"

const formSchema = z.object({
    todoTitle: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
})


export function TodoForm(){
    
}