import axios from 'axios'

const AuthService = () => {
    const baseUrl = 'https://fmd.arraydigitals.com/api';

    const handleLogin = (data) => {
        return axios.post(`${baseUrl}/doctors`, data)
    }
   
    return { handleLogin }
}

export default AuthService