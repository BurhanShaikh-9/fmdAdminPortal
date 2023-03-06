import React,{useContext, useEffect, useState} from 'react'
import logoImg from '../../assets/images/Logo.png'
import {SidebarContext} from '../../App'

export const Sidebar = (props) => {

   
    const { sideBar, setSideBar } = useContext(SidebarContext )
    
    const closeButton = () =>{
        setSideBar(!sideBar)
    }

    return (
        <>
            <aside id="sidebar" className={sideBar ? 'sidebarwidth' : 'sidebar'}>
                <div className="sideBarInner">
                    <div className='aSideCloseButton'>
                        <button onClick={closeButton}><i className="bi bi-x"></i></button>
                    </div>
                    <div className="LogoImage">
                        <img src={logoImg} alt="" />
                    </div>

                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-person-lines-fill sideIcon"/><span>Doctors</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="pastOrder.php" className="navLinkA ">
                                        <i className="bi bi-circle"></i><span>Add Doctor</span>
                                    
                                    </a>
                                </li>
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                    <i className="bi bi-circle"></i><span>Manage Doctors</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav1" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-clipboard-pulse sideIcon"/><span>Labs</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav1" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkB ">
                                        <i className="bi bi-circle"></i><span>Add Lab</span>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                    <i className="bi bi-circle"></i><span>Manage Labs</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav2" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-capsule sideIcon"></i><span>Pharmacy</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav2" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                        <i className="bi bi-circle"></i><span>Add Product</span>
                                      
                                    </a>
                                </li>
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                    <i className="bi bi-circle"></i><span>Manage Product</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav3" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-folder2-open sideIcon"/><span>Reports</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav3" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                        <i className="bi bi-circle"></i><span>Doctors</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                        <i className="bi bi-circle"></i><span>Labs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                        <i className="bi bi-circle"></i><span>Products</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                        <i className="bi bi-circle"></i><span>Customers</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                        <i className="bi bi-circle"></i><span>Users</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
