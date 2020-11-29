import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lottie from 'react-lottie';
import LoadImages from './customHooks/FetchImages';

import './App.scss';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import lottieLoader from './assets/loader/loader_yellow.json';


const App: React.FC = () => { 

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  const isImages = LoadImages() 

  const useDelayedRender = (delay: number) => {
    const [delayed, setDelayed] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => setDelayed(false), delay);
      return () => clearTimeout(timeout);
      // eslint-disable-next-line
    }, []);
    return (fn: any) => !delayed && fn();
  };

  const DelayedRender: React.FC<{ delay: number; children: any}> = ({ delay, children }) => useDelayedRender(delay)(() => children);
  
  return (
  <>
    <div className="app">
        {!isImages
        ? (<DelayedRender delay={500}>
            <div className="app__lotti" >
            <Lottie 
              options={ defaultOptions }
              height={400}
              width={400}
              />
            </div>
          </DelayedRender>)

        : (<BrowserRouter>
            <Header />
            <Switch> 
              <Route path="/" exact component={ Main } />
              <Route path="/about" exact component={ About } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </BrowserRouter>)
        }
    </div>
  </>
  )
}

export default App;
