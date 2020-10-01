import React,{useState,useEffect} from 'react';

import axios from '../../http-common';
import Sidebar from "../../components/Sidebar.js";
import Volume from './AddVolume';

// import Button from "../components/Button/Button";
import Table from "../../components/Table/Table.js";

function Dashboard() {


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

  const [ name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // useEffect(() => {
  //   axios.post('/auth/me').then(res=>{
  //     console.log("ddd",res);
  //       const name = res.data.name;
  //     const email = res.data.email ;
  //     setName(name);
  //     setEmail(email);
  //   })
  // }, [])

 



  return (  
  	
  <div className="flex">

<div className="bg-white shadow-full overflow-hidden sm:rounded-lg mx-auto w-full">
  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
      Admin Information
    </h3>
    <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
      Personal details and application.
    </p>
  </div>
  <div>
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm leading-5 font-medium text-gray-500">
          Full name
        </dt>
        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
        {name}
        </dd>
      </div>
     
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm leading-5 font-medium text-gray-500">
        Email
        </dt>
        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          {email}
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm leading-5 font-medium text-gray-500">
          Post
        </dt>
        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          Admin
        </dd>
      </div>
    </dl>
  </div>
</div>
</div>
  );
}

export default Dashboard;
