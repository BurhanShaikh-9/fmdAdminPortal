import React, { useState } from 'react'
import AuthService from '../../../services/auth.service';
import GeneratePassword from '../../../services/generatePassword';

export const LabForm = () => {
    const { generatePassword } = GeneratePassword();
    const { labRegister, onSuccessLogin } = AuthService();
    const [password, setPassword] = useState('')
    const [labData, setLabData] = useState({
        fullname: "",
        email: "",
        phone: "",
        name: "",
        logo: "",
    })

    const getLoginInput = () => {
        const name = e.target.name;
        const value = e.target.value;
        setLabData({ ...labData, [name]: value })
    }
    const handlePassword = (e) => {
        const newPassword = generatePassword(10);
        setPassword(newPassword);
    }
    const formSubmit = (e) => {
        e.preventDefault()
        const labSubmit = { ...labData, password }
        console.log(labSubmit)
        
        labRegister(labSubmit).then((res)=>{
            console.log(res)
        }).catch((err) =>{
            console.log(err.message)
        })
    }

    return (
        <>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                Add Lab
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <form className="additionForm" onSubmit={formSubmit}>
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Lab Image</label>
                                                <input type="file" className='form-control' id='doctorName' placeholder='Enter Name...' onClick={getLoginInput} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Lab Name</label>
                                                <input type="text" id='doctorName' placeholder='Enter Name...' onClick={getLoginInput} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorEmail">Email</label>
                                                <input type="email" id='doctorEmail' placeholder='Enter Email...' onClick={getLoginInput} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorPhone">Phone</label>
                                                <input type="number" id='doctorPhone' placeholder='Enter Number...' onClick={getLoginInput} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorCNIC">Lab Address</label>
                                                <input type="text" id='doctorCNIC' placeholder='Enter Address...' onClick={getLoginInput} />
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorSpecility">Lab Representative Name</label>
                                                <input type="text" id='doctorCNIC' placeholder='Enter Representative Name...' onClick={getLoginInput} />
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorSpecility">Lab Representative No.</label>
                                                <input type="text" id='doctorCNIC' placeholder='Enter Representative  Number...' onClick={getLoginInput} />
                                            </div>
                                        </div>


                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <div className="fields">
                                                <button type='Submit' onClick={handlePassword}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
