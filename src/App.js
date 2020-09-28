import React from 'react';
import './styles/main.css';
import {Router} from '@reach/router';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard/Dashboard';
import Volume from './admin/Dashboard/AddVolume';
import Sidebar from "./components/Sidebar.js";
import Form from './admin/Dashboard/Form';
import Issue from './admin/Dashboard/Issue';
import AddIssue from './admin/Dashboard/AddIssue';

function App() {

	const options=[
  {
    name:"volume",
    label:"Volume",
    url:"volume"
  },
  {
    name:"issue",
    label:"Issue",
    url:"issues"
  }

  ]
  return (
  	<div className="flex flex-row w-full ">
    <Sidebar  height={"100vh"} options={options} label="Journal"/>
    <div className=" w-1/2  m-4">
    <Router>
    <Login path="/" />
    <Dashboard path="/dashboard" />
    <Volume path="/volume" />
    <Form path="/volume/create" />
    <Issue path="/issues" />
    <AddIssue path="/add-issue" />


    </Router>
    </div>
    </div>
  );
}

export default App;
