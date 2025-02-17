import { prisma } from "../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    const {todoid} = await params;
    const todo = await prisma.todo.findUnique({where: 
        {id: Number(todoid)},
    });
    return NextResponse.json({todo: todo});
}