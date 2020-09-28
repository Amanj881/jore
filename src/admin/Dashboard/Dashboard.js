import React,{useState,useEffect} from 'react';

import axios from '../../http-common';
// import Button from "../components/Button/Button";
import Table from "../../components/Table/Table.js";

function Dashboard() {

  const [ data, setData] = useState(null);
  

  useEffect(() => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(tableHead);
        }, 2000)
    }).then((result) => {
      console.log("result",result);
        setData(result);
    })
  }, [])
  

  

  const Schema = {
  "id": "",
  "name": "",
  "author": "",
  "released": ""
}
  const tableHead =[{
  "id": "1",
  "name": "Ghost in The Wires",
  "author": "Kevin Mitnick",
  "released": "08/15/2011"
},
{
  "id": "2",
  "name": "Console Wars",
  "author": "Blake J. Harris",
  "released": "05/13/2014"
},
{
  "id": "3",
  "name": "The Phoenix Project",
  "author": "Gene Kim, Kevin Behr, George Spafford",
  "released": "12/01/2017"
}]


  return (
  	<div className="flex flex-row ">
    <div className="flex-shrink py-16">
          <Table headers={Object.keys(Schema)} rows={data} />
    </div>
    </div>
  );
}

export default Dashboard;
