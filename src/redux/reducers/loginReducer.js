import {SET_LOGIN_STATE} from '../actions/actionTypes';


const initialState = {
	isLoggedIn:false,
	token:'',
	refreshToken:'',
	expiresOn:'',
	data:''
}


export const loginReducer = (state = initialState , action) => {

	switch(action.type)
	{
		case 'SET_LOGIN_STATE':
			return {
				...state,
				...action.payload,
				isLoggedIn:true,
			}

			default:
				return state;
			

		
	}

} 