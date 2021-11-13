import { Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer"

import Home from "./components/pages/home/Home"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
