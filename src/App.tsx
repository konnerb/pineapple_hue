import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Lottie from 'react-lottie';
import lottieLoader from './assets/loader/loader_yellow.json';

const Main = lazy(() => import('./pages/Main/Main'));
const About = lazy(() => import('./pages/About/About'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));


const App: React.FC = () => { 

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

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
      <BrowserRouter>
      <Suspense 
        fallback={
          <DelayedRender delay={500}>
            <div className="app__lotti" >
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
            />
            </div>
          </DelayedRender>
        }
      >
        <Header />
          <Switch> 
            <Route path="/" exact component={ Main } />
            <Route path="/about" component={ About } />
            <Route path="*" component={ NotFound } />
          </Switch> 
      </Suspense>
      </BrowserRouter>
    </div>
  </>
  )
}

export default App;
