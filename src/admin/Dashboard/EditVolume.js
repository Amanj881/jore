import React,{useState,useEffect} from 'react'
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
import { useParams } from 'react-router-dom';
import {Link,useHistory} from "react-router-dom";

import swal from 'sweetalert';

function EditVolume() {

	const {uuid} = useParams();
	const history = useHistory();
	const [volume, setVolume] = useState()
	// const [d, sd] = useState("")

	useEffect(() => {
		console.log(uuid);
		getVolume();
	}, [])


	const getVolume = () => {
		axios.get(`showVolume/${uuid}`).
		then((res)=>{
			setVolume(res.data.name);
		}).catch((error)=>console.log(error));
	}

	const handleChange = (e) =>{
		setVolume({[e.target.name]:e.target.value});
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			name:volume
		}
		console.log(payload)
		await axios.put(`updateVolume/${uuid}`,payload);
		swal("Good job!", "Update SuccessFully", "success");

		history.push('/volume');
		
	}
	return (
		<div className=" w-full">
					<label className="text-center font-bold text-4xl ">Update Volume</label>	
					<hr className="w-full h-4" />
					<form  onSubmit={handleSubmit}>
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
				</div>
	)
}

export default EditVolume