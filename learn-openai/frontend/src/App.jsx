import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";

function App() {
  const [result, setResult] = useState("");
  return (
    <div className="container">
      <Form setResult = {setResult}/>
      <Output result = {result}/>
    </div>
  );
}

export default App;
