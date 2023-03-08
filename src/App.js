import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Layout } from './Main/layout';
import { Sidebar } from './Main/Component/sidebar';
import { DoctorForm } from './Main/WebPage/Doctors/DoctorForm';
import { Dashboard } from './Main/WebPage/dashboard/dashboard';
import { ROUTES } from './utils/Routes';
import { LabForm } from './Main/WebPage/Labs/labForm';
import { PharmacyForm } from './Main/WebPage/pharmacy/pharmacyForm';
import { ManageDoctor } from './Main/WebPage/Doctors/manageDoctor';
import { ManageLab } from './Main/WebPage/Labs/manageLab';
import { ManagePharmacy } from './Main/WebPage/pharmacy/managePharmacy';
import { ProductForm } from './Main/WebPage/pharmacy/productForm';

export const SidebarContext = createContext({ sideBar: false, setSideBar: () => { } })

function App() {
  //for sideBar and top header functionality
  const [sideBar, setsideBar] = useState(false);
  const getSideBarPos = (value) => {
    setsideBar(!value);
  }

  return (
    <>
      <SidebarContext.Provider value={{ sideBar: sideBar, setSideBar: setsideBar }}>
        <Sidebar />
        <div className={sideBar ? 'AppFull' : 'App'}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.HOMEPAGE} element={<Dashboard />} />
              <Route path={ROUTES.DOCTOR_FORM} element={<DoctorForm />} />
              <Route path={ROUTES.DOCTOR_MANAGE} element={<ManageDoctor />} />
              <Route path={ROUTES.LAB_FORM} element={<LabForm />} />
              <Route path={ROUTES.LAB_MANAGE} element={<ManageLab />} />
              <Route path={ROUTES.PHARMACY_MANAGE} element={<ManagePharmacy />} />
              <Route path={ROUTES.PHARMACY_FORM} element={<PharmacyForm />} />
              <Route path={ROUTES.PRODUCT_FORM} element={< ProductForm />} />
            </Route>
          </Routes>
        </div>
      </SidebarContext.Provider>
      
      {/* <Login /> */}

    </>
  );
}

export default App;
