import React,{useState} from 'react'
import AuthService from '../../../services/auth.service';

export const CategoryForm = () => {
    const { addCategory } = AuthService();
    const [brandData, setBrandData] = useState({
        name: "",
        image: "",
        desciption: ""
    })
    const getLoginInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBrandData({ ...brandData, [name]: value })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        const BrandSubmit = { ...brandData }
        addCategory(BrandSubmit).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })
        console.log(BrandSubmit)
    }
    return (
        <>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                Add Category
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <form className="additionForm" onSubmit={formSubmit}>
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Category Name</label>
                                                <input type="text" id='doctorName' name='name' placeholder='Enter Name...' onChange={getLoginInput} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Category Image</label>
                                                <input type="file" id='doctorName' name='image' className='form-control' onChange={getLoginInput} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Category Description</label>
                                                <input type="text" id='doctorName' name='desciption' placeholder='Enter Description...' onChange={getLoginInput} />
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
