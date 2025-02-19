import { prisma } from "../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req, res){
    const allTodos = await prisma.todo.findMany();
    console.log(allTodos);
    // res.status(200).json(allTodos);
    // 
    return NextResponse.json({allTodos:allTodos});
}