import React,{useState,useEffect} from 'react'
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
// import { useNavigate } from "@reach/router"
import Loader from '../../components/Loader/Loader.js'
import swal from 'sweetalert';

function Form({label}) {

// const navigate=useNavigate();
const [volume,setVolume] = useState();
const[loader,setLoader]=useState(true)

useEffect(() => {
	  setTimeout(
	  	function()
	  	{ 
	  		setLoader(!loader) }, 
	  		2000);

}, [])
const handleSubmit = (e) => {
	e.preventDefault();
	let payload = {
			volume: volume,
		};
		// console.log("volume",volume);

		axios.post('/add-volume',payload).
		then((res)=>{
			console.log(res);
			swal("Good job!", "Created SuccessFully", "success");

		}).catch((errors)=>{
			return errors;
		})

		setVolume('');
		// navigate('/volume');
}
	return (
		<>
		{loader ? <Loader /> : (
				<div className=" w-1/2 mx-auto">
					<label className="text-center font-bold text-4xl ">Add Volume</label>	
					<hr className="w-full h-4" />
					<form onSubmit={handleSubmit} >
						 <TextInput
		                	id="volume_name"
							labelText="Volume Name"
							name="volume"
							onChange={(e => setVolume(e.target.value))}
							value={volume}
		
		              	/>
		              	
			              <div className="mt-6">
		                <span className="block w-full rounded-md shadow-sm">
		                  <Btn type="submit" width="full" 
							>
		                   Add Volume
		                  </Btn>
		                </span>
		              </div>
		
		
		
					</form>
				</div>)}
		</>
	)
}

export default Form