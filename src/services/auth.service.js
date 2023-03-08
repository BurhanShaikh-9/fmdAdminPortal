import axios from 'axios'

const AuthService = () => {
    const baseUrl = 'https://fmd.arraydigitals.com/api';

    const doctorRegister = (data) => {
        return axios.post(`${baseUrl}/doctors`, data)
    }
    const labRegister = (data) => {
        return axios.post(`${baseUrl}/labs`, data)
    }





    return { doctorRegister, labRegister }
}

export default AuthService