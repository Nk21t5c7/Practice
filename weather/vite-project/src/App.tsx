import Home from "./pages/Home";
import Place from "./pages/Place";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
