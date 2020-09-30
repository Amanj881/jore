import React,{useState,useEffect} from 'react'
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
import { useNavigate } from "@reach/router"
import Select from '../../components/SelectInput/SelectInput'
import Loader from '../../components/Loader/Loader.js'
import Upload from '../../components/UploadFile/UploadFile'
import getVolume from '../../Services/getVolume.js'
function AddIssue({label}) {


const validate = (value) => {
	const errors = {}

	if(!value.issue)
	{
		errors.issue="Issue field is Required"
	}
	return(errors);
}	

const navigate=useNavigate();
const [issue,setIssue] = useState('');
const [volume,setVolume] = useState('');
const [loader, setLoader] = useState(true);
const [file, setFile] = useState('');
const [errors, setErrors] = useState({})
  const [ data, setData] = useState(null);

useEffect(() => {

    new Promise((resolve) => {

        setTimeout(() => {
            resolve(axios.get('/getVolume'));
        }, 1000)
    }).then((result) => {
    	let res=result.data.map((r)=>{
    		return{
    			label:r.name,
    			value:r.name
    		}
    	})
    	console.log(res);
        setData(res);
        setLoader(!loader);
    })
  }, [])


// }, [])

// useEffect(() => {
// 	const getVolumnData = (query) => {
// 		let volume=getVolume(query);
// 		volume = volume.map((c)=>{
// 			return{
// 				label:c.name,
// 				value:c.name
// 			}
// 		});
// 			console.log	(setData(volume)); 

// 	}
   
//   }, [])



const handleSubmit = (e) => {
	e.preventDefault();
	// setVolume(e.target.value)
	let payload = {
			issue: issue,
			volume:volume,
			file:file
		};
		let errors = validate(payload);
		setErrors(errors);
		console.log("volume",payload);

		axios.post('/add_volume',payload).
		then((res)=>{
			console.log(res);
		})
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
		<>

		{loader ? 

			<Loader className="py-32"/> : 
			<div className=" w-full">
					<label className="text-center font-bold text-4xl ">Add Issue</label>	
					<hr className="w-full h-4" />
					<form onSubmit={handleSubmit} >
						 <Select
						 	label="Select Volume"
							options={data}
							onChange={value => setVolume(value)}
							value={volume}
							styleClass="w-full border border-blue-800 rounded h-12 shadow-lg"
		
		              	/>
		              	<div className="mt-6">
			              	<TextInput
			                	id="issue_name"
								labelText="Issue Name"
								name="issue"
								onChange={(e => setIssue(e.target.value))}
								value={issue}
								invalid={errors.issue}
								invalidText={errors.issue}
								inputStyles="w-full border border-blue-800 rounded h-12 shadow-lg"
			              	/>
		              	<div className="mt-6">
		              		<Upload 
		              			label="Select File" 
								styleClass="w-full border border-blue-800 rounded h-12 shadow-lg"
		              			value={file}
		              			onChange= {(e=>setFile(e.target.value))}/>
		              	</div>
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
				</div>}
				</>
	)
}

export default AddIssue