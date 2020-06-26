import React from 'react';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Routes from './routes/routes'
import './App.css';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
})

export default function App() {
  console.log('Application version: ', process.env.REACT_APP_VERSION)
  console.log('Application build date: ', process.env.REACT_APP_BUILD_DATE)
  return (
    
      <Router history={history}>
        <Routes />
      </Router>
    
  )
}


