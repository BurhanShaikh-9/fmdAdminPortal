import React,{useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Layout } from './Main/layout';
import { Sidebar } from './Main/Component/sidebar';

function App() {
  const [sideBar, setsideBar] = useState(false);
  const getSideBarPos = (value) => {
    setsideBar(!value);
    // console.log(sideBar, "sideBar")
  }
  return (
    <>

      <Sidebar sideBarWidth={sideBar} />
      <div className={sideBar ? 'AppFull' : 'App'}>
        {/* <Routes>
            <Route element={Sidebar}/>
        </Routes> */}

        <Layout getAsideValue={getSideBarPos}></Layout>
      </div>
    </>
  );
}

export default App;
