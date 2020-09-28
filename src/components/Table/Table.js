import React from 'react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table({headers,rows}) {
	return (
		<div className="table-fixed">
		<table className="mx-auto table-fixed" >
      <TableHeader headers={headers}></TableHeader>
      <TableBody headers={headers} rows={rows}></TableBody>
      </table>
		</div>
	)
}

export default Table