'use client';
import { useEffect, useState } from 'react';
import CardList from "./components/CardList";
// const prisma = new PrismaClient(); これ毎回宣言するとエラーの原因になる

export default function Home() {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    const getAllTodo = async () => {
      const response = await fetch("http://localhost:3015/api/todo", {
        cache: "no-store",
      });

      const data = await response.json();
      setAllTodos(data);
    }
    getAllTodo();


  }, []);


  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="p-6 h-[70vh] flex">
        {allTodos != '' ?
          <>
            <CardList allTodos={allTodos} />
          </>
          :
          <p className='text-3xl content-center'>Loading...</p>

        }
      </main>
    </div>
  );
}
