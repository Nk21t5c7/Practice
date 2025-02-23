"use server";

import { z } from "zod";
import prisma from "../../lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const addTodo = async ({
    todoTitle,
    description
}) => {
    await prisma.todo.create({
        data: {
            todoTitle,
            description
        },
    });

    revalidatePath("/");

    redirect("/");
};
export default addTodo;