import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import Table from "../../components/Table/Table.js";
import axios from '../../http-common';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import swal from 'sweetalert'

function Issue() {

const Schema = {
  "uuid": "",
  "issue": "",
  "volume": "",
  "file":"",
  "Actions":""
}

  const [ data, setData] = useState();
    const [showIssue, setShowIssue] = useState([])


  const editIssue = () =>{
  // navigate('/volume/create')
}



const deleteIssue = (uuid,e) => {
  console.log(uuid);
  axios.delete(`/deleteIssue/${uuid}`
  ).
  then((res=>{
 const del = showIssue.filter(employee => uuid !== employee.uuid)
        swal("Good job!", "Deleted SuccessFully", "success");
                   setShowIssue(del);       
  })).catch(err => console.log(err));

}

	useEffect(() => {

    new Promise((resolve) => {

        setTimeout(() => {
            resolve(getIssues());
        }, 1000)
    })
  }, [showIssue])

    const getIssues = () => {
     axios.get('/getIssues').then((result) => {
      let res = result.data.map((e)=>{
       return{ uuid:e.uuid,
               issue:e.issue,
               volume:e.volumes.name,
               file:e.file,
               Actions:(
                <div className="flex">
                <AiFillDelete size={32} className="text-white hover:text-black" onClick={(uuid)=>deleteIssue(e.uuid)}/>
                <Link to={`edit-issue/${e.uuid}`}><AiFillEdit size={32} className="text-white hover:text-black" onClick={(uuid)=>editIssue(e.uuid)}/></Link>
                </div>
                )
             }
      })
     
      setData(res);
    })

  }

  
	return (
		<div className="flex flex-col mx-4 py-4">
			<Link to="/add-issue" className=" w-32 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Create</Link>
    		{data != '' ?
        (<div className="flex-shrink py-16">
                  <Table headers={Object.keys(Schema)} rows={data} />
              </div>   ):<div className="text-center shadow-lg text-3xl font-semibold mx-auto">No Data FOund </div> }
            
 

		</div>
	)
}

export default Issue