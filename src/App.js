import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import notes from "./index";
import CreateNote from './components/CreateNote';

function App() {
  
  return (
    <div>
    <Header />
    <CreateNote />
     
    <Footer />
    </div>
  );
}

export default App;
