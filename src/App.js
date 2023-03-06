import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Layout } from './Main/layout';
import { Sidebar } from './Main/Component/sidebar';
import { Login } from './Main/WebPage/login';
import { ROUTES } from './utils/Routes';

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
        {/* <Sidebar />
        <div className={sideBar ? 'AppFull' : 'App'}>
          <Routes>
            <Route element={ <Layout/> }>
              <Route path="/" element={} />
            </Route>
          </Routes>
        </div> */}
      </SidebarContext.Provider>
      <Login />

    </>
  );
}

export default App;
