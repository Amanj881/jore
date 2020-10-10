import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
import Select from '../../components/SelectInput/SelectInput'
import Loader from '../../components/Loader/Loader.js'
import Upload from '../../components/UploadFile/UploadFile'
import {Link,useHistory} from "react-router-dom";
import swal from 'sweetalert';

function EditIssue() {
const {uuid} = useParams();
const history=useHistory();	
const [issue,setIssue] = useState('');
const [volume,setVolume] = useState('');
const [errors, setErrors] = useState({})
const [ data, setData] = useState(null);
const [filePath, setFilePath] = useState('');
const [loader, setLoader] = useState(true);

useEffect(() => {
	getVolume();

	getIssue();
   
  }, [])

	const getIssue = () => {
		 axios.get(`showIssue/${uuid}`).
		then((res)=>{
			const issue_name=res.data.issue;
			const file=res.data.filePath;
			const volume_name=res.data.volumes.name;


			setIssue(issue_name);
			setVolume(volume_name);
			setFilePath(file)
		}).catch((error)=>console.log(error));
	}


	

	const getVolume = async() => {
		await axios.get('/getVolume').
		then((result)=>{
			let res=result.data.map((r)=>{
    		return{
    			label:r.name,
    			value:r.uuid
    		}

    	})
    		setData(res);
    			 setLoader(false);

			console.log("dfvb",res);

		})

	}
	const handleSubmit =async (e) => {
		e.preventDefault();
		const payload = {
			issue:issue,
			volue_uuid:volume,
			file:filePath
		}
		console.log(payload)
		await axios.put(`updateIssue/${uuid}`,payload);
		swal("Good job!", "Update SuccessFully", "success");

		history.push('/issues');
		
	}
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
		              			onChange= {(e=>setFilePath(e.target.value))}

		              			/>

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

export default EditIssue