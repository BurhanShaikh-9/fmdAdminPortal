import React,{useState} from 'react'
import { Header } from './Component/header'

export const Layout = (props) => {

  // const [sideBar, setsideBar] = useState();
  // const getSideBarPos = (value) => {
  //   setsideBar(!value);
  //   props.getAsideValue(sideBar)
  // }

  return (
    <div> <Header /> </div>
  )
}
