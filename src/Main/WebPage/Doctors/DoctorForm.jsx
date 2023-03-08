import React, { useState } from 'react'
import sunImg from '../../../assets/images/sun1.png'
import moonImg from '../../../assets/images/moon.png'
import GeneratePassword from './generatePassword'
import AuthService from '../../../services/auth.service'

export const DoctorForm = () => {
  const { generatePassword } = GeneratePassword();
  const { handleLogin, onSuccessLogin } = AuthService();
  const [password, setPassword] = useState('')
  const [doctorData, setDoctorData] = useState({
    fullname: "",
    email: "",
    phone: "",
    image: "",
    qualification: "",
    experience: "",
    specialist_category: "",
    pmdaId: "",
    cnic: "",
    availability: "",
  })

  const getLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDoctorData({ ...doctorData, [name]: value })
  }

  function handlePassword() {
    const newPassword = generatePassword(10);
    setPassword(newPassword);
  }

  const submitForm = (e) => {
    e.preventDefault();
    const DoctorRegister = { ...doctorData, password }
    console.log(DoctorRegister, "doctorRegisterData");
    handleLogin(DoctorRegister).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err, "Doctor Register Error")
    })
  }

  return (
    <>
      <section className='mainSection'>
        <div className="container">
          <div className="mainSectionWrapper">
            <div className="heading">
              <p>
                Add Doctor
              </p>
            </div>
            <div className="card cardForm">
              <div className="card-body">
                <form className="additionForm" onSubmit={submitForm}>
                  <div className="row g-4">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorImage">Image</label>
                        <input type="file" className='form-control' id='doctorImage' name='image' onChange={getLoginInput} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorName">Name</label>
                        <input type="text" id='doctorName' name='fullname' placeholder='Enter Name...' onChange={getLoginInput} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorEmail">Email</label>
                        <input type="email" id='doctorEmail' name='email' placeholder='Enter Email...' onChange={getLoginInput} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorPhone">Phone</label>
                        <input type="number" id='doctorPhone' name='phone' placeholder='Enter Number...' onChange={getLoginInput} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorPmdaNo">PMDA ID</label>
                        <input type="text" id='doctorPmdaNo' placeholder='Enter PMDA ID...' name='pmdaId' onChange={getLoginInput} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorCNIC">CNIC</label>
                        <input type="text" id='doctorCNIC' placeholder='Enter Number...' name='cnic' onChange={getLoginInput} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorPmdaNo">Qualification</label>
                        <input type="text" id='doctorPmdaNo' placeholder='Enter Qualification...' name='qualification' onChange={getLoginInput} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorPmdaNo">Experience</label>
                        <input type="text" id='doctorPmdaNo' placeholder='Enter Experience (In Years)...' name='experience' onChange={getLoginInput} />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorSpecility">Specility</label>
                        <select name="specialist_category" id="">
                          <option value="">Kidney</option>
                          <option value="">Surgeon</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorDayAvailability">Availability</label>
                        <div className='availOuter'>
                          <div className="availInner">
                            <div className="labelDiv">
                              <img src={sunImg} alt="" />
                              <label htmlFor="doctorDayAvailability">Day</label>
                            </div>
                            <input type="radio" id="doctorDayAvailability" name='availability' />
                          </div>
                          <div className="availInner">
                            <div className="labelDiv">
                              <img className='moon' src={moonImg} alt="" />
                              <label htmlFor="doctorNightAvailability">Night</label>
                            </div>
                            <input type="radio" name='availability' id='doctorNightAvailability' />
                          </div>
                        </div>

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
