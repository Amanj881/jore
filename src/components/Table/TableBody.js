import React from 'react'
import Loader from '../Loader/Loader.js'
function TableBody({headers,rows}) {
	const col = headers ? headers.length : 0;
	// console.log("object",col);
	const Spinner = rows === null ;
	// console.log(Spinner);

	function buildRow(row,headers)
	{
		return (
			<tr key = {row.uuid}>
			{ headers.map((header,index)=>{
				// console.log("header",row[header])
				return <td key={index}>{row[header]}</td>
			})}	
			</tr>
			)}

	return (
		<tbody>
        {Spinner &&
          <tr key="spinner-0">
              <td colSpan={col} className="text-center py-8">
                  <div className="" role="status">
					<Loader />                  
					</div>
              </td>
          </tr>
          }
        { !Spinner && rows && rows.map((value) => {
              return buildRow(value, headers);
          })}
    </tbody>
	)
}

export default TableBody