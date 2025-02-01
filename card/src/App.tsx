import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='container p-3 m-auto max-w-[1000px]'>
      <Header title = "My Profile" />
      <Main subtitle = "Nodoka" />
      <Footer copyright = "©︎2025 Nodoka Hanaki"/>
    </div>
  )
}

export default App;
