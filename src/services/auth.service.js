import axios from 'axios'

const AuthService = () => {
    const baseUrl = 'https://fmd.arraydigitals.com/api';

    const doctorRegister = (data) => {
        return axios.post(`${baseUrl}/doctors`, data)
    }
    const labRegister = (data) => {
        return axios.post(`${baseUrl}/labs`, data)
    }
    const addProduct = (data) => {
        return axios.post(`${baseUrl}/labs`, data)
    }
    const addBrand = (data) => {
        return axios.post(`${baseUrl}/brands`, data)
    }
    const addCategory = (data) => {
        return axios.post(`${baseUrl}/brands`, data)
    }
    const addPharmacy = (data) => {
        return axios.post(`${baseUrl}/labs`, data)
    }





    return { doctorRegister, labRegister,addBrand,addCategory }
}

export default AuthService