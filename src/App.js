import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
function App() {
  return (
    <BrowserRouter>
    <switch>
    <Route path="/" exact component={Login}/>
    <Route path="/reg" component={Registration}/>
    </switch>
    </BrowserRouter>
  );
}

export default App;
