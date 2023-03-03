import React,{useEffect, useState} from 'react'
import logoImg from '../../assets/images/Logo.png'

export const Sidebar = (props) => {


    const [sideBarWidth, setSideBarWidth] = useState(false);
    useEffect(()=>{
        setSideBarWidth(props.sideBarWidth)
        console.log(sideBarWidth ,"true")
    })
    // const closeButton = () =>{
    //     setSideBarWidth(true)
    //     console.log(sideBarWidth ,"false")
    // }

    return (
        <>
            <aside id="sidebar" className={sideBarWidth ? 'sidebarwidth' : 'sidebar'}>
                <div className="sideBarInner">
                    {/* <div className='aSideCloseButton'>
                        <button onClick={closeButton}>X</button>
                    </div> */}
                    <div className="LogoImage">
                        <img src={logoImg} alt="" />
                    </div>

                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-person-lines-fill sideIcon"/><span>Doctors</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="pastOrder.php" className="navLinkA ">
                                        <i className="bi bi-circle"></i><span>Add Doctor</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav1" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-clipboard-pulse sideIcon"/><span>Labs</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav1" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkB ">
                                        <i className="bi bi-circle"></i><span>Add Lab</span>
                                    </a>
                                </li>
                             
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav2" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-capsule sideIcon"></i><span>Pharmacy</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav2" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                        <i className="bi bi-circle"></i><span>Add Product</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="restaurantCategories.php" className="navLinkC ">
                                    <i className="bi bi-circle"></i><span>Add Product</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed" data-bs-target="#charts-nav3" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-folder2-open sideIcon"/><span>Reports</span><i className="bi bi-chevron-down ms-auto"></i>
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
