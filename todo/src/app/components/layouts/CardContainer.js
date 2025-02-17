

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";



const CardContainer = ({todo}) => {
    return (
            <Card className="min-w-[350px]">
                <CardHeader>
                    <CardTitle>{todo.todoTitle}</CardTitle>
                    <CardDescription>{todo.created}</CardDescription>
                </CardHeader>
                <CardContent>
                {todo.description}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href={`/todo/${todo.id}`} >Read more</Link>
                </CardFooter>
            </Card>
    );
};

export default CardContainer;
