import axios from '../http-common';

export default function (argument) {
	return axios.get('/getVolume').then((response)=>{
		return response.data;
	}).
	catch((error)=>{
		return error;
	})
}