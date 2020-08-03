import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <Home/>
  );
}

export default App;
