

export const getUser = () => {
	const user = localStorage.getItem('token');
	if(user)
	{
		return user;
	} 
	else{
		return null;
	}
} 

export const  getToken = () => {
	return localStorage.getItem('token') || null ;
}

export const removeUser = () => {
	localStorage.removeItem('token');
} 

export const setToken = (token,user="") => {
	localStorage.setItem('token',token);
}