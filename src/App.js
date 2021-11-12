import { Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/layout/navbar/Navbar";

import Home from "./components/pages/home/Home"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
