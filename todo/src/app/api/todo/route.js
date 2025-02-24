import  prisma  from "../../../lib/prismaClient.js";
// import { PrismaClient } from '@prisma/client'

import { NextResponse } from "next/server";

export async function GET(req, res){
    const allTodos = await prisma.todo.findMany();
    console.log(allTodos);
    // res.status(200).json(allTodos);
    // 
    // return NextResponse.json({allTodos:allTodos});
    return Response.json(allTodos, { status: 200 });

}