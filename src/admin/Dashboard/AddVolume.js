import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import Table from "../../components/Table/Table.js";
import axios from '../../http-common';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

import swal from 'sweetalert'

function AddVolume() {

  const [ data, setData] = useState();
  const [volumes, setVolumes] = useState([])
  const [showData,setShowData]=useState(true);
	const Schema = {
  "uuid": "",
  "name": "",
  "created_at": "",
  "Actions":""

}

const editVolume = () =>{
  // navigate('/volume/create')
}

const deleteVolume = (uuid,e) => {
  console.log(uuid);
  axios.delete(`/deleteVolume/${uuid}`
  ).
  then((res=>{
        swal("Good job!", "Deleted SuccessFully", "success");
       
  })).catch(err => console.log(err));

}

  useEffect(() => {

    new Promise((resolve) => {

        setTimeout(() => {
            resolve(axios.get('/getVolume'));
        }, 1000)
    }).then((result) => {
      let res = result.data.map((e)=>{
       return{ uuid:e.uuid,
               name:e.name,
               created_at:e.created_at,
               Actions:(
                <div className="flex">
                <AiFillDelete size={32} className="text-white hover:text-black" onClick={(uuid)=>deleteVolume(e.uuid)}/>
                <AiFillEdit size={32} className="text-white hover:text-black" onClick={(uuid)=>editVolume(e.uuid)}/>
                </div>
                )
             }
      })
      setData(res);
        if(res.length<0)   
        {
          setShowData(false)
        } 

    })

  }, [data])


  


	return (
		<div className="flex flex-col mx-4 py-4">
			<Link to="/volume/create" className=" w-32 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Create</Link>
    		<div className="flex-shrink py-16">
          <Table headers={Object.keys(Schema)} rows={data} />
    </div>   

		</div>
	)
}

export default AddVolume

