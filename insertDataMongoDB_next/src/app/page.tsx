'use client';
import * as React from 'react';
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  // ここはこのまま

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      // ここのはバックエンドのURL入れる
      let result = await fetch('http://localhost:3133/api/register', {
        method: 'POST',
        body: JSON.stringify({ name: input }),  // inputをnameとして送信
        headers: {
          'Content-Type': 'application/json',
        }
      })

      // if (!result.ok) {
      //   throw new Error("response not ok");
      // }
      result = await result.json();
      console.log('result', result);
      if (result.ok) {
        setInput("");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} 
        className='border'/>
        <button className='border'>Submit</button>
      </form>
    </>
  )
}