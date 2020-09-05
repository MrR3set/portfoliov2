import React from 'react';
import Hero from "./components/Hero/Hero"
import './App.scss';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <nav>Bairon Paz</nav>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
    </div>
  );
}

export default App;
