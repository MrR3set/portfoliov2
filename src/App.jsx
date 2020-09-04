import React from 'react';
import Hero from "./components/Hero/Hero"
import './App.scss';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Projects></Projects>
    </div>
  );
}

export default App;
