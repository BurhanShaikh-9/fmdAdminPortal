import React, {useState} from 'react'
import AuthService from '../../../services/auth.service'

export const BrandForm = () => {
    const {addBrand} = AuthService();
    const [brandData, setBrandData] = useState({
        name:"",
        logo:"",
        desciption:""
    })
    const getLoginInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setBrandData({...brandData, [name]:value })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        const BrandSubmit = {...brandData}
        addBrand(BrandSubmit).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err.message)
        })
        console.log(BrandSubmit)
    }
    return (
        <section className='mainSection'>
            <div className="container">
                <div className="mainSectionWrapper">
                    <div className="heading">
                        <p>
                            Add Brand
                        </p>
                    </div>
                    <div className="card cardForm">
                        <div className="card-body">
                            <form className="additionForm" onSubmit={formSubmit}>
                                <div className="row g-4">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                        <div className="fields">
                                            <label htmlFor="doctorName">Brand Name</label>
                                            <input type="text" id='doctorName' name='name' placeholder='Enter Name...' onChange={getLoginInput} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                        <div className="fields">
                                            <label htmlFor="doctorName">Brand Logo</label>
                                            <input type="file" id='doctorName' name='logo'  className='form-control' onChange={getLoginInput}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                        <div className="fields">
                                            <label htmlFor="doctorName">Brand Description</label>
                                            <input type="text" id='doctorName' name='desciption' placeholder='Enter Description...' onChange={getLoginInput}/>
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
    )
}
