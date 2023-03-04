import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Layout } from './Main/layout';
import { Sidebar } from './Main/Component/sidebar';

export const SidebarContext = createContext({ sideBar: false, setSideBar: () => { } })

function App() {
  const [sideBar, setsideBar] = useState(false);
  const getSideBarPos = (value) => {
    setsideBar(!value);
  }
  
  return (
    <>
      <SidebarContext.Provider value={{ sideBar: sideBar, setSideBar: setsideBar }}>
        <Sidebar  />
        <div className={sideBar ? 'AppFull' : 'App'}>
          {/* <Routes>
            <Route element={Sidebar}/>
        </Routes> */}

          <Layout></Layout>
        </div>
      </SidebarContext.Provider>

    </>
  );
}

export default App;
