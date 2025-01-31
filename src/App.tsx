import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <h1 className="App">Setup miki page</h1>
      <Routes>
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
