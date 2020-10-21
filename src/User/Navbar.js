import React,{useState,useEffect} from 'react';
import './Navbar.css';
import {  Link } from "react-router-dom";
import axios from '../http-common';

function Navbar({searching,menuOptions}) {

	const [searchBar, setSearchBar] = useState(searching)
	const [open, setClose] = useState(false);
	const [data, setData] = useState('');
	useEffect(() => {
		getIssues();
	}, [])
	


 const getIssues = () => {
     axios.get('/getIssues').then((result) => {
      let res = result.data.map((e,index)=>{
       return (
       	<li className="rounded-sm relative px-3 py-1 hover:bg-gray-100" key={index}>
       							      <button
       							        className="w-full text-left flex items-center outline-none focus:outline-none"
       							      >
       							        <span className="pr-1 flex-1">{e.volumes.name}</span>
       							        <span className="mr-auto">
       							          <svg
       							            className="fill-current h-4 w-4
       							            transition duration-150 ease-in-out"
       							            xmlns="http://www.w3.org/2000/svg"
       							            viewBox="0 0 20 20"
       							          >
       							            <path
       							              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
       							            />
       							          </svg>
       							        </span>
       							      </button>
       							      <ul
       							        className="bg-white border rounded-sm absolute top-0 right-0 
       							  transition duration-150 ease-in-out origin-top-left
       							  min-w-32
       							  "
       							      >
       							        <li className="px-3 py-1 hover:bg-gray-100">{e.issue}</li>
       							             </ul>
       							    	</li>)
      })
     	
     setData(res);
    })
 }

	return (
		<>
			<div className="w-full">
			<div className="w-full h-auto p-6 bg-white shadow-2xl  hidden lg:flex relative fixed">
				<div className="flex justify-between w-full  ">
					<h1 className="leading-none text-2xl text-grey-darkest">
      				
        					<Link to="/" className="no-underline text-grey-darkest hover:text-black hidden lg:inline-flex ">
        					<img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
        					</Link>
     					
     					 
    				</h1>
    				
    			<nav className="mx-16">
				    <ul className="list-reset md:flex md:items-center">
				      <li className="md:ml-4 text-2xl font-bold">
				      <Link to="/">
				       Home
				       </Link>
				      </li>
				      <div className="group ">
				      	<button className="outline-none focus:outline-none border-0 rounded-sm px-0 lg:px-3 py-1 bg-white flex items-center lg:ml-2">
				      		<span className="pr-1 font-bold text-2xl flex-1">Policy</span>
				      		<span>
				      			 <svg
							        className="fill-current h-4 w-4 transform group-hover:-rotate-180
							        transition duration-150 ease-in-out mt-2"
							        xmlns="http://www.w3.org/2000/svg"
							        viewBox="0 0 20 20"
							      >
							        <path
							          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							        />
							      </svg>
				      		</span>
				      	</button>
				      		<ul className="bg-white transform scale-0 group-hover:scale-100 absolute transition duration-500">
				      			<li className="  relative px-3 py-1 hover:bg-gray-100"><Link to="/publication-rules">Publication Policy</Link></li>
				      			<hr/>
				      			<li className="rounded-sm relative px-3 py-1 hover:bg-gray-100"><Link to="/editorial-policy">Editorial Policy</Link></li>

				      		</ul>
				      </div>
				    
				      <div className="group inline-block">
							  <button
							    className="outline-none focus:outline-none border-0 px-0 lg:px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
							  >
							    <span className="pr-1 font-bold text-2xl flex-1">Pub Volume</span>
							    <span>
							      <svg
							        className="fill-current h-4 w-4 transform group-hover:-rotate-180
							        transition duration-150 ease-in-out mt-2"
							        xmlns="http://www.w3.org/2000/svg"
							        viewBox="0 0 20 20"
							      >
							        <path
							          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							        />
							      </svg>
							    </span>
							  </button>
							  <ul
							    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
							  transition duration-500 ease-in-out origin-top min-w-32"
							  >
							   
							   {data}
							  </ul>
						</div>
						<li className="md:ml-4 text-2xl font-bold">
				      <Link to="/team">
				       Team
				       </Link>
				      </li>
				      <li className="md:ml-4 text-2xl font-bold">
				      <Link to="/contact">
				       Contact
				       </Link>
				      </li>
				     
				    </ul>
  				</nav>
				</div>
			</div>
			<div className="flex justify-between p-4  lg:hidden">
					<h1 className="leading-none text-2xl text-grey-darkest">
      					<Link to="/" className="no-underline text-grey-darkest hover:text-black lg:hidden lg:inline-flex"><img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
        					</Link>
     					 
    				</h1>
    				{!open ? (<div className="-mr-2 -my-2 lg:hidden" onClick={e=>setClose(!open)}>
        				<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
         
          			<svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
         			 </svg>
        			</button>
      			</div>) : (<div className=" md:hidden" onClick={e=>setClose(!open)}>
      			 <button type="button" className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
            
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
          </button> </div>)}
    				</div>
    				{open && <div className="w-full h-auto p-6 bg-white shadow-xl rounded-lg lg:hidden">
				
					
    			<nav className="">
				    <ul className="list-reset md:flex md:items-center text-center">
				      <li className="md:ml-4 text-2xl font-bold">
				      <Link to="/">
				       Home
				       </Link>
				      </li>
				      <div className="group flex justify-center">
				      	<button className="outline-none focus:outline-none border-0 rounded-sm  py-1 bg-white flex items-center md:mx-4">
				      		<span className="pr-1 font-bold text-2xl ">Policy</span>
				      		<span >
				      			 <svg
							        className="fill-current h-4 w-4 transform group-hover:-rotate-180 
							        transition duration-150 ease-in-out mt-2"
							        xmlns="http://www.w3.org/2000/svg"
							        viewBox="0 0 20 20"
							      >
							        <path
							          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							        />
							      </svg>
				      		</span>
				      	</button>
				      		<ul className="bg-white border rounded-tl-lg rounded-br-lg ease-in-out   transform scale-0 group-hover:scale-100 absolute transition duration-500">
				      			<li className=" rounded-tl-lg rounded-br-lg  relative px-3 py-1 hover:bg-gray-100"><Link to="/publication-rules">Publication Policy</Link></li>
				      			<hr/>
				      			<li className="rounded-sm relative px-3 py-1 hover:bg-gray-100"><Link to="/editorial-policy">Editorial Policy</Link></li>

				      		</ul>
				      </div>
				      <div className="group flex justify-center">
							  <button
							    className="outline-none focus:outline-none border-0 px-0 lg:px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
							  >
							    <span className="pr-1 font-bold text-2xl flex-1">Publication Volume</span>
							    <span>
							      <svg
							        className="fill-current h-4 w-4 transform group-hover:-rotate-180
							        transition duration-150 ease-in-out mt-2"
							        xmlns="http://www.w3.org/2000/svg"
							        viewBox="0 0 20 20"
							      >
							        <path
							          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							        />
							      </svg>
							    </span>
							  </button>
							  <ul
							    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
							  transition duration-150 ease-in-out origin-top min-w-32"
							  >
							   
							   {data}

							  </ul>
						</div>
						<li className="md:ml-4 text-2xl font-bold">
				       Team
				      </li>
				      <li className="md:ml-4 text-2xl font-bold">
				       Contact
				      </li>
				     
				    </ul>
  				</nav>
				
			</div>}


			</div>

		</>

		
	)
}

export default Navbar;