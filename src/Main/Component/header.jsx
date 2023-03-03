import React, { useState } from 'react'
import ProfileImg from '../../assets/images/profile-img.jpg'

export const Header = (props) => {

    const [sideBarShow, setSideBarShow] = useState(false);
    const sideMenuHide = () => {
        setSideBarShow(!sideBarShow);
        props.getAsideValue(sideBarShow);
    }
    return (
        <>
            <header>
                <div className="headerInner">
                    <button className='menuButton' onClick={sideMenuHide}><i className="bi bi-list"></i></button>
                    <div className="navRight">
                        <div className="dropdown notificationDropDown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-bell"></i>
                                <div className="notificationShow">
                                    {/* <div className="spinner-grow text-danger " role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> */}
                                </div>

                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Notification</a></li>
                                <li><a className="dropdown-item" href="#">Notification</a></li>
                                <li><a className="dropdown-item" href="#">Notification</a></li>
                            </ul>
                        </div>
                      
                        <div className='aboutDoctor'>
                            <p className='doctorName'>Doctor Name</p>
                            <p className='doctorSpeciality'>Specialist</p>
                        </div>
                        <div className="dropdown profileDropDown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={ProfileImg} alt="" />
                                <div className="notificationShow">
                                </div>

                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Inbox</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
