import React from 'react';
import './styles/main.css';
import {Router} from '@reach/router';
import Login from './admin/Login';
function App() {
  return (
    <Router>
    <Login path="/" />
    </Router>
  );
}

export default App;
