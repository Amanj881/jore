import React,{useState,useEffect} from 'react'
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
import Select from '../../components/SelectInput/SelectInput'
import Loader from '../../components/Loader/Loader.js'
import Upload from '../../components/UploadFile/UploadFile'
import {Link} from "react-router-dom";

function AddIssue({label}) {


const validate = (value) => {
	const errors = {}

	if(!value.issue)
	{
		errors.issue="Issue field is Required"
	}
	return(errors);
}	

const [issue,setIssue] = useState('');
const [volume,setVolume] = useState('');
const [loader, setLoader] = useState(true);
const [filePath, setFilePath] = useState('');
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
    			value:r.uuid
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
			filePath:filePath
		};
		let errors = validate(payload);
		setErrors(errors);
		console.log("volume",payload);

		axios.post('/add-issue',payload).
		then((res)=>{
			console.log(res);
		}).
		catch((e)=>{
			return e;
		})
		setIssue('');
		// navigate('/issues');
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
			<div className=" w-1/2 mx-auto ">
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
		              		<input 
		              			type="file"
								styleclass="w-full border border-blue-800 rounded h-12 shadow-lg"
		              			name={filePath}
		              			onChange= {(e=>setFilePath(e.target.value))}/>
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