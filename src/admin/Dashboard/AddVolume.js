import React from 'react'
import {Link} from "@reach/router";
import DataTable from "../../components/DataTable.js";

function AddVolume() {

	 const tableHead = [
    {
      title:"User Name"
    }

  ]


	return (
		<div className="flex flex-col mx-4 py-4">
			<Link to="/volume/create" className=" w-32 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Create</Link>
    		<div className="">	
    			  	<DataTable tableHead={tableHead}/> 
    		</div>     

		</div>
	)
}

export default AddVolume

