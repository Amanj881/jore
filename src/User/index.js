import React from 'react'
// import Navbar from '../components/Navbar/Navbar';



const  menuOptions=[
  {
    name:"volume",
    label:"Volume",
    url:"volume",
    id:1,
  },
  

  ]
function index() {
	return (
		<div className="flex flex-col">
			<section className="text-gray-700 body-font">
  				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
	    			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
	     			<img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/720x600/?law"/>
    			</div>
   				 <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
			      <div className="w-auto border-1 shadow-xl hover:transform scale-150 rounded-lg m-6 mx-auto p-6 antialiased lg:h-64 lg:w-2/3 ">
				<p className="">ISBE:<label className="uppercase font-bold">xxxxxxxxxxx</label></p>
				<div className="text-center  flex flex-col">
				<span className=" italic text-6xl font-bold mt-12 ">Journal Name</span>
				<span className=" italic text-xl ">LawShastra Journal</span></div>
			</div>
			    </div>
			  </div>
			</section>
			<div className=" rounded-lg mx-auto   text-left flex flex-col antialiased h-64 w-2/3 ">
			<span className="border-b-4 rounded-lg pr-2 border-teal-500 w-32 font-semibold">About Journal </span>
				<p className="text-justify mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
		</div>
	)
}

export default index