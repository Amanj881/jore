import React,{useState,useEffect} from 'react';
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
import Index from './User/';
import Navbar from './User/Navbar';
import PublicationRule from './User/PublicationRule';
 import Loader from 'react-loader-spinner'
import Team from './User/Team';
import Contact from './User/Contact';


function App(props) {
  
  const [loader, setLoader] = useState(true)

	useEffect(() => {
   setTimeout(()=>setLoader(false),3000)
  }, [])
  
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
    {loader ? (<div className="flex justify-center self-center"> <Loader
         type="BallTriangle"
         color="#00BFFF"
         height={50}
         width={50}
        
 
      /></div>):(<div><Navbar / >
    <Switch>
       <Route path="/team" component={Team} />
       <Route path="/contact" component={Contact} />

      <Route path="/publication-rules" component={PublicationRule} />
      <Route path="/" component={Index} />

            

    </Switch></div>) } 
    
    
    </BrowserRouter>
  );
}

export default App;
