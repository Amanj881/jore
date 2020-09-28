import React,{useState} from 'react'
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
import { useNavigate } from "@reach/router"
import Select from '../../components/SelectInput/SelectInput'
function AddIssue({label}) {

const navigate=useNavigate();
const [issue,setIssue] = useState();
const [volume,setVolume] = useState('');

const handleSubmit = (e) => {
	e.preventDefault();
	// setVolume(e.target.value)
	let payload = {
			issue: issue,
			volume:volume,
		};
		console.log("volume",payload);

		// axios.post('/add_volume',payload).
		// then((res)=>{
		// 	console.log(res);
		// })
		setIssue('');
		navigate('/issues');
}

	const options = [
	{
		label:"Volume 1",
		value:"1"
	},
	{
		label:"Volume 2",
		value:"2"
	}
	]

	return (
		<div className=" w-full">
			<label className="text-center font-bold text-4xl ">Add Issue</label>	
			<hr className="w-full h-4" />
			<form onSubmit={handleSubmit} >
				 <Select
				 	label="Select Volume"
					options={options}
					onChange={value => setVolume(value)}
					value={volume}
					styleClass="w-full border border-blue-800 rounded h-12"

              	/>
              	<div className="mt-6">
              	<TextInput
                	id="issue_name"
					labelText="Issue Name"
					name="issue"
					onChange={(e => setIssue(e.target.value))}
					value={issue}

              	/>
              	</div>
	              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Btn type="submit" width="full" 
					>
                   Add Issue
                  </Btn>
                </span>
              </div>



			</form>
		</div>
	)
}

export default AddIssue