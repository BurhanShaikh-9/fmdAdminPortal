import React from 'react'

export const DoctorForm = () => {
  return (
    <>
      <section className='mainSection'>
        <div className="container">
          <div className="mainSectionWrapper">
            <div className="card cardForm">
              <div className="card-body">
                <form className="additionForm">
                  <div className="row g-4">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorName">Name</label>
                        <input type="text" id='doctorName' placeholder='Enter Name...' />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorEmail">Email</label>
                        <input type="email" id='doctorEmail' placeholder='Enter Email...' />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorPhone">Phone</label>
                        <input type="number" id='doctorPhone' placeholder='Enter Number...' />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorPmdaNo">PMDA ID</label>
                        <input type="text" id='doctorPmdaNo' placeholder='Enter PMDA ID...' />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorCNIC">CNIC</label>
                        <input type="text" id='doctorCNIC' placeholder='Enter Number...' />
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                      <div className="fields">
                        <label htmlFor="doctorSpecility">Specility</label>
                        <select name="" id="">
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
                            <label htmlFor="doctorDayAvailability">Day</label>
                            <input type="radio" id="doctorDayAvailability" name='availability' />
                          </div>
                          <div className="availInner">
                            <label htmlFor="doctorNightAvailability">Night</label>
                            <input type="radio" name='availability' id='doctorNightAvailability' />
                          </div>
                        </div>

                      </div>
                    </div>


                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                      <div className="fields">
                        <button type='Submit'>Submit</button>
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
