import React from 'react';
import Projects from "./components/Projects/Projects"
import Hero from "./components/Hero/Hero"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Projects></Projects>
    </div>
  );
}

export default App;
