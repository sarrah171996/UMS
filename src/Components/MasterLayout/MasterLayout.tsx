import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
<>

<div className="container-fluid">
  <div className="row">
    <div className="col-md-3">side bar</div>
    <div className="col-md-9">
      <NavBar/>
      <Outlet/>
    </div>
  </div>
</div>

</>  

)
}
