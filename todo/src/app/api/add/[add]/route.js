import { prisma } from "../../../../lib/prismaClient";
import { NextResponse } from "next/server";

// export async function POST(req, {params}){
//     console.log('あ');
//     const paramsVal = await params;
//     console.log(paramsVal);
//     const {add} =  await params;
//     console.log('add', add);
//     // const { formData } = await req.json();

//     // console.log('todo', formData);
//     // await prisma.todo.create({
//     //     todo:{
//     //         todoTitle:todo.todoTitle,
//     //         description:todo.description,
//     //     }
//     // })
//     // .then((result) => {
//     //     console.log(result);
//     //     return; 
//     // }).catch((err) => {
//     //     console.log(err)
//     // });
// }