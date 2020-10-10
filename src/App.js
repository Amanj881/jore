import React from 'react';
// import './styles/main.css';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Login from './admin/Login';
import Dashboard from './admin/Dashboard/Dashboard';
import Volume from './admin/Dashboard/AddVolume';
import Sidebar from "./components/Sidebar.js";
import Form from './admin/Dashboard/Form';
import Issue from './admin/Dashboard/Issue';
import AddIssue from './admin/Dashboard/AddIssue';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import EditVolume from './admin/Dashboard/EditVolume';
import EditIssue from './admin/Dashboard/EditIssue';

function App(props) {
  
	
  
  return (
  	<BrowserRouter>
    <Switch>
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/volume" component={Volume} />
      <PrivateRoute path="/create" component={Form} />
      <PrivateRoute path="/issues" component={Issue} />
      <PrivateRoute path="/add-issue" component={AddIssue} />
      <PrivateRoute path="/edit-volume/:uuid" component={EditVolume} />
      <PrivateRoute path="/edit-issue/:uuid" component={EditIssue} />

    </Switch>
    </BrowserRouter>
  );
}

export default App;
