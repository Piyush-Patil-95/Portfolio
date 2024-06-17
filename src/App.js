import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Skills from './components/Skills';
import { BrowserRouter, Route, Routes,Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      </BrowserRouter>
    </>
  );
}

export default App;
