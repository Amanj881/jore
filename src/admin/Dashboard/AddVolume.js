import React,{useState,useEffect} from 'react'
import {Link} from "@reach/router";
import Table from "../../components/Table/Table.js";
import axios from '../../http-common';

function AddVolume() {

  const [ data, setData] = useState(null);

	const Schema = {
  "uuid": "",
  "name": "",
  "created_at": "",
  
}
useEffect(() => {

    new Promise((resolve) => {

        setTimeout(() => {
            resolve(axios.get('/getVolume'));
        }, 1000)
    }).then((result) => {
        setData(result.data);
    })
  }, [])


  


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

