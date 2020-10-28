  
import axios from 'axios';

const interceptorError = (error) => Promise.reject(error.response);

const instanse = axios.create({
	baseURL: `${process.env.API_URL}`,
});

instanse.interceptors.response.use(response => response, interceptorError);

export default instanse;