import{SET_LOGIN_STATE} from './actionTypes';
// import axios from 'axios';
import axios from '../../http-common';


const setLogin = (payload) =>{
	return {
		type:'SET_LOGIN_STATE',
		payload:payload
	}
}



export const login = ({payload}) => {
	return (dispatch) => {
		 axios.post('/auth/login',payload).

		then((res)=>
			      localStorage.setItem('jwtToken', res.data.access_token)

	)}
}