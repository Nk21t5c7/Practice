import React from 'react';
import './App.css';
import { useState } from "react";
import List from './components/List';
import Upload from './components/Upload';
import axios from 'axios';

export default function App() {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [csvData, setCsvData] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // ここのはバックエンドのURL入れる
      let result = await fetch('http://localhost:3030/register', {
        method: 'post',
        body: JSON.stringify({ name: input, email: email }),  // inputをnameとして送信
        headers: {
          'Content-Type': 'application/json'
        }
      })
      result = await result.json();
      console.log('result', result);
      if (result.ok) {
        setInput("");
        setEmail("");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const fetchData = () => {
    axios.get('http://localhost:3030/getUser')
      .then((user) => {
        // console.log('user', user);
        setData(user.data);
      })
      .catch(error => console.log(error));
  }


  return (
    <>
      <div className='formContainer'>
        <form className = 'manualForm' onSubmit={handleSubmit}>
          <label htmlFor="inputName">Name</label>
          <input id="inputName" type="text" value={input} onChange={handleInput} />
          <label htmlFor="inputEmail">Email</label>
          <input id="inputEmail" type="email" value={email} onChange={handleEmail} />
          <button >Submit</button>
        </form>
      </div>

      <div className="buttons">
        <button onClick={() => fetchData()}>Show Name and Email Address</button>
        {
          data 
            ?
            <List data={data} />
            : 
            ""
        }

        <Upload csvData = {csvData} setCsvData = {setCsvData} />

      </div>
    </>
  )
}

