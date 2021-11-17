import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer"

import Home from "./components/pages/home/Home"
import Register from "./components/pages/register/Register"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
