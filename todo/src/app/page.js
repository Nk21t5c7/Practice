'use client';
import { useEffect, useState } from 'react';
import CardList from "./components/CardList";
// import 

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
      <main className="">
        {allTodos != '' ?
          <>
            <CardList allTodos={allTodos} />
          </>
          :
          <p>Loading...</p>

        }
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
