import  prisma  from "../../../../lib/prismaClient";
// import { NextResponse } from "next/server";

export async function GET(req, {params}){
    console.log( await params);
    const {todoid} = await params;
    console.log('todoid', todoid);
    const todo = await prisma.todo.findUnique({
        where: 
        {
            id:Number(todoid),
        },
    });
    console.log(todo);
    return Response.json(todo, { status: 200 });
}