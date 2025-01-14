import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-blue-100">
        <Navbar title="Negotiator Genius" />
        <main className="container mx-auto px-3 pb-12 py-10">
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
        </main>
      </div>
    </Router >
  );
}

export default App;
