import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import Header from './components/Header/Header'

function App() {
  return (  
  <>
    <BrowserRouter>
    <Header />
      <Switch> 
        <Route path="/" component={ Main } />
        <Route path="/about" component={ About } />
      </Switch> 
    </BrowserRouter>
  </>
  )
}

export default App;
