import React from 'react';
import './styles/main.css';
import {Router} from '@reach/router';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard/Dashboard';
import Create from './admin/Dashboard/AddVolumn';
import Form from './admin/Dashboard/Form';

function Index() {
  return (
    <Router>
    
    <Dashboard path="/" />
    <Create path="/volume" />

    </Router>
  );
}

export default Index;
Index