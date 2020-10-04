import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import Sidebar from "../components/Sidebar.js";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
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
  	<div className="flex">
  	<Sidebar height={650} options={options} label="journal" />
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
    </div>
  )
}

export default PrivateRoute;