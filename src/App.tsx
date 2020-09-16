import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import Header from './components/Header/Header'

const App: React.FC = () => (  
  <>
    <div className="app">
      <BrowserRouter>
      <Header />
        <Switch> 
          <Route path="/" exact component={ Main } />
          <Route path="/about" component={ About } />
        </Switch> 
      </BrowserRouter>
    </div>
  </>
)

export default App;
