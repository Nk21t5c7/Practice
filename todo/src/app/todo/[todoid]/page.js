'use client';
import { useEffect, useState } from 'react';

export default function Page({ params: todoid }) {
    const [todo, setTodo] = useState('');

    useEffect(() => {
        const getTodo = async (id) => {
            // console.log(await id.params);
            const todoid = await id.params.todoid;
            console.log(await todoid);
            const response = await fetch(`http://localhost:3015/api/todo/${id.params.todoid}`, {
                cache: "no-store",
            });

            const data = await response.json();
            console.log('data', data);
            setTodo(data.todo);
        }
        getTodo({ params: todoid });

    }, [todoid]);


    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <main className="">
                {console.log(todo)}
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
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

            </footer>
        </div>
    );
}
