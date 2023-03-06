import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Header } from './Component/header'

export const Layout = (props) => {


  return (
    // <div> <Header /> </div>
    <>
      <Header />
      <Outlet />

    </>
  )
}
