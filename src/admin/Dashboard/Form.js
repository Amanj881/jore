import React,{useState,useEffect} from 'react'
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
import {Link,useHistory} from "react-router-dom";
import Loader from '../../components/Loader/Loader.js'
import swal from 'sweetalert';

function Form({label}) {

const validate = (value) =>
{
	const errors = {}

	if(!value.volume)
	{
		errors.volume="Volume Field Required"
	}
	setError(errors);
}





 const history=useHistory();
const [volume,setVolume] = useState();
const[loader,setLoader]=useState(true)
const [error, setError] = useState('')
useEffect(() => {
	  setTimeout(
	  	function()
	  	{ 
	  		setLoader(!loader) }, 
	  		1000);

}, [])
const handleSubmit = (e) => {
	e.preventDefault();
	let payload = {
			volume: volume,
		};
		// console.log("volume",volume);
		setError('');
		axios.post('/add-volume',payload).
		then((res)=>{
			swal("Good job!", "Created SuccessFully", "success");
			setVolume('');
		 history.push('/volume');

		}).catch((errors)=>{
			setError(errors.response.data.errors.volume);
		})

		
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
							invalid={error}
							invalidText={error}
							// inputStyles={`form-input rounded block w-full h-12 border-1 border-blue-800 bg-white-100 ${ error ? 
							// 		"bg-error-light border-1 border-red-800 border-error" : "border border-red-800 bg-white-100"
							// 	}`}
		
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