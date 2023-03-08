import React, { useContext, useEffect, useState } from 'react'
import logoImg from '../../assets/images/Logo.png'
import { SidebarContext } from '../../App'
import { NavLink  } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes'

export const Sidebar = () => {


    const { sideBar, setSideBar } = useContext(SidebarContext)

    const closeButton = () => {
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
                        <NavLink  to={ROUTES.HOMEPAGE} activeclassname="active" >
                            <img src={logoImg} alt="" />
                        </NavLink >
                    </div>

                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                                <i className="bi bi-person-lines-fill sideIcon" /><span>Doctors</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <NavLink  to={ROUTES.DOCTOR_FORM} className="navLinkA " activeclassname="active">
                                        {/* <input type="radio" name='sidebar' id='addDocSideBar' /> */}
                                        <i className="bi bi-plus-lg" /><span>Add Doctor</span>

                                    </NavLink >
                                </li>
                                <li>
                                    <NavLink  to={ROUTES.DOCTOR_MANAGE} className="navLinkC " activeclassname="active">
                                        {/* <input type="radio" name='sidebar' id='manageDocSideBar' /> */}
                                        <i className="bi bi-pencil" /><span>Manage Doctors</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav1" data-bs-toggle="collapse" href="#">
                                <i className="bi bi-clipboard-pulse sideIcon" /><span>Labs</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav1" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <NavLink  to={ROUTES.LAB_FORM} className="navLinkB " activeclassname="active">
                                        <i className="bi bi-plus-lg" /><span>Add Lab</span>

                                    </NavLink >
                                </li>
                                <li>
                                    <NavLink  to={ROUTES.LAB_MANAGE} className="navLinkC " activeclassname="active">
                                    <i className="bi bi-pencil" /><span>Manage Labs</span>
                                    </NavLink >
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav2" data-bs-toggle="collapse" href="#">
                                <i className="bi bi-capsule sideIcon"></i><span>Pharmacy</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav2" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
                                <li>
                                    <NavLink  to={ROUTES.PRODUCT_FORM} className="navLinkC " activeclassname="active">
                                    <i className="bi bi-plus-lg" /><span>Add Product</span>

                                    </NavLink >
                                </li>

                                <li>
                                    <NavLink  to={ROUTES.PHARMACY_FORM} className="navLinkC " activeclassname="active">
                                    <i className="bi bi-plus-lg" /><span>Add Pharmacy</span>

                                    </NavLink >
                                </li>

                                <li>
                                    <NavLink  to={ROUTES.PHARMACY_MANAGE} className="navLinkC " activeclassname="active"> 
                                    <i className="bi bi-pencil" /><span>Manage Product</span>
                                    </NavLink >
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav3" data-bs-toggle="collapse" href="#">
                                <i className="bi bi-folder2-open sideIcon" /><span>Reports</span><i className="bi bi-chevron-down ms-auto"></i>
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
