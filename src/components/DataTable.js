import React from 'react';


function DataTable({tableHead})  {

	console.log(tableHead);
	const heading = tableHead.map((head,index)=>{
		return (
			<div key={index}>{head.label}</div>

			)

	})
	return (
		<table className="table-fixed">
  			<thead>
    		<tr>
		      <th className="w-1/2 px-4 py-2">{heading}</th>
		      		      <th className="w-1/2 px-4 py-2">{heading}</th>

		     
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td className="border px-4 py-2">Intro to CSS</td>
		      <td className="border px-4 py-2">Adam</td>
		      <td className="border px-4 py-2">858</td>
		    </tr>
		    <tr className="bg-gray-100">
		      <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
		      <td className="border px-4 py-2">Adam</td>
		      <td className="border px-4 py-2">112</td>
		    </tr>
		    <tr>
		      <td className="border px-4 py-2">Intro to JavaScript</td>
		      <td className="border px-4 py-2">Chris</td>
		      <td className="border px-4 py-2">1,280</td>
		    </tr>
		  </tbody>
	</table>


		)
}

export default DataTable;