import React from 'react';
import './App.css';
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // ここのはバックエンドのURL入れる
      let result = await fetch('http://localhost:3030/register', {
        method: 'post',
        body: JSON.stringify({ name: input }),  // inputをnameとして送信
        headers: {
          'Content-Type': 'application/json'
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

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button >Submit</button>
      </form>
    </>
  )
}