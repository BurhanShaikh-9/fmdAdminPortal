import React, {useState} from 'react'
import AuthService from '../../../services/auth.service';
import GeneratePassword from '../../../services/generatePassword';
export const ProductForm = () => {
    const { generatePassword } = GeneratePassword();
    const { doctorRegister, onSuccessLogin } = AuthService();
    const [password, setPassword] = useState('')
    const [doctorData, setDoctorData] = useState({
        name: "",
        featured_img: "",
        brand: "",
        category: "",
        price: "",
        discounted_price: "",
        description: "",
        size: "1",
        size_unit: "1",
        quantity: "1",
        quantity_unit: "1",
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
        doctorRegister(DoctorRegister).then((res) => {
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
                                Add Product
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <form className="additionForm">
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Product Name</label>
                                                <input type="text" id='doctorName' placeholder='Enter Name...' name='name' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorEmail">Product Description</label>
                                                <input type="text" id='doctorEmail' placeholder='Enter Email...' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorPhone">Product Image</label>
                                                <input type="file" className='form-control' id='doctorPhone' placeholder='Enter Number...'  name='featured_img'/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorPhone">Product Quantity</label>
                                                <input type="number" id='doctorPhone' placeholder='Enter Number...' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Product Brand</label>
                                                <select name="" id="">
                                                    <option value="1">kidney</option>
                                                    <option value="2">General</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Product Category</label>
                                                <input type="text" id='doctorName' placeholder='Enter Name...' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Product Tag</label>
                                                <input type="text" id='doctorName' placeholder='Enter Name...' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Product Title</label>
                                                <input type="text" id='doctorName' placeholder='Enter Name...' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Product Price</label>
                                                <input type="text" id='doctorName' placeholder='Enter Name...' />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Product Discount</label>
                                                <input type="text" id='doctorName' placeholder='Enter Name...' />
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
