'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const getTodo = async (id) => {
      const response = await fetch(`http://localhost:3015/api/todo/${id}`, {
        cache: "no-store",
      });

      const data = await response.json();
      console.log('data', data);
      setTodo(data);
    }
    getTodo({params: todoid});

  }, []);


  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="">
        {todo != '' ?
          <article>
            <h2>{todo.todoTitle}</h2>
            <p>{todo.created}</p>
            <p>{todo.description}</p>
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
