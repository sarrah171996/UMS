import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/profilepic.png'





export default function SideBar() {

  const [isCollapsed ,setCollapseed]=useState(false)

  let togglecollapsed =()=>{
    setCollapseed(!isCollapsed)
  }



  return (
    <div className='sidebar-container bg-in vh-100'>
      <Sidebar collapsed={isCollapsed}>
  <Menu>

{
isCollapsed?
(    <button className='border-0 bg-transparent'>

  <i className='fa-solid fa-chevron-right p-3 ' onClick={togglecollapsed}></i>
    </button>
):

(   
  <div className=' d-flex justify-content-end'>

  <button className='border-0 bg-transparent '>
  <i className='fa-solid fa-chevron-left p-3 ' onClick={togglecollapsed}></i>
    </button>
  </div>
)

}

    <div className="my-5 text-center ">
{
 !isCollapsed?(  
  <>
  
  <img className=' rounded-circle' src={profileImg} alt="" />
  <h4>Karthi Madesh</h4>
  <h6 className='text-warning'>Admin</h6>
  </>

):(
  <>
    <h6 className='pt-4'>Karthi Madesh</h6>
  <h6 className='text-warning'>Admin</h6>

  </>
)
}
    </div>
  <div className='m-3'>

  <MenuItem className='side-item' icon={<i className="fa-solid fa-house"></i>} component={<Link to="/dashboard" />}> Home</MenuItem>
  <MenuItem icon={<i className='fa-solid fa-users '></i>} component={<Link to="/dashboard/userslist" />}> Users</MenuItem>
  <MenuItem icon={<i className='fa-regular fa-address-card '></i>}component={<Link to="/dashboard/adduser" />}> User Data</MenuItem>
  <MenuItem icon={<i className='fa-regular fa-user '></i>}component={<Link to="/dashboard/profile" />}> Profile</MenuItem>
  </div>
  </Menu>
</Sidebar>
    </div>
  )
}
