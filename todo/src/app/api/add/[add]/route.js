import { prisma } from "../../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req, res){
    console.log('あ');
    // const { formData } = await req.json();

    // console.log('todo', formData);
    // await prisma.todo.create({
    //     todo:{
    //         todoTitle:todo.todoTitle,
    //         description:todo.description,
    //     }
    // })
    // .then((result) => {
    //     console.log(result);
    //     return; 
    // }).catch((err) => {
    //     console.log(err)
    // });
}