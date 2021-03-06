import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
