'use client';
import React, { useEffect, useState } from 'react';


export default function Page({ params }) {
    const [todo, setTodo] = useState(null);
    const {todoid} = React.use(params);
    
    useEffect(() => {
        if (todoid) {
            const getTodo = async () => {
                const response = await fetch(`http://localhost:3015/api/todo/${todoid}`)
                    .then(async (result) => {
                        // console.log(await result.json());
                        return await result.json();
                    }).catch((err) => {
                        console.log(err);
                    });
                // const data = await response.json();
                setTodo(response);
                console.log(todo);
            };
            getTodo();
        }
    }, [todoid]);


    return (
        <>
            {todo && <div className=" font-[family-name:var(--font-geist-sans)]">
                <main className=" h-[70vh]">
                    {todo != '' ?
                        <article className='p-4'>
                            <h2 className='text-3xl'>{todo.todoTitle}</h2>
                            <p>{todo.created}</p>
                            <p className='text-2xl'>{todo.description}</p>
                        </article>
                        :
                        <p>Loading...</p>
                    }
                </main>
            </div>}
        </>
    );
}
