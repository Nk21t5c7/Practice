import { useState } from 'react';
import './App.css';
import FormContainer from './Components/FormContainer';
import Result from './Components/Result';

function App() {
  const [rating, setRating] = useState(null);

  return (
    <div className="App">
      <FormContainer setRating = {setRating}/>
      {rating && <Result rating = {rating}/>}
    </div>
  );
}

export default App;
