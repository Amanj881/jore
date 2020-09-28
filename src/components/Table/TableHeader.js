import React from 'react'

function TableHeader({headers}) {
	return (
		
			<thead className="thead-dark" >
				<tr className="header-0">
				{headers.map((head,index)=>{
					return (
						<th key={index}>
							<div>
								{head}
							</div>
						</th>	
				)})}
				</tr>
			</thead>
		
	)
}

export default TableHeader