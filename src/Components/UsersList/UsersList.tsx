import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


export default function UsersList() {

  const [users , setUser] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    alert(id)
    setShow(true)
    
  };

const getUsers = async()=>{
  try {
    let response = await axios.get('https://dummyjson.com/users')
    setUser(response.data.users);
    
    

  } catch (error) {
    console.log(error);
    
  }

}

const deleteUser = async(id)=>{
  try {
    
    let response = await axios.delete(`https://dummyjson.com/users/${id}`)
console.log({users : users});
    
    console.log({res : response});
    
  } catch (error) {
    console.log(error);
    
  }
}


const editUser = async(id)=>{
  try {
    
    let response = await axios.put(`https://dummyjson.com/users/${id}`)
    console.log({res : response});
 navigateToEditUserData
    
  } catch (error) {
    console.log(error);
    
  }
}


useEffect(()=>{
  getUsers()
},[])


let navigate = useNavigate()

let navigateToUserData = ()=>{
  navigate('/dashboard/adduser')
}

let navigateToEditUserData = ()=>{
  navigate('/dashboard/adduser')
}



  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="warning" onClick={()=>handleShow} >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>


    <div className='title p-3 d-flex justify-content-between'>
      <h3>Users List</h3>
      <button className='btn btn-warning' onClick={navigateToUserData}>Add New User</button>
    </div>
    <hr />

<div className="p-3">

<table className="table">
  <thead>
    <tr>
      <th scope='col'></th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Birth Date</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>

{users.map((user:any)=> (
  <tr key={ user.id}>
  <th scope="row"><img className='w-25' src={user.image} alt="" /></th>
  <td>{user.firstName} {user.lastName} </td>
  <td>{user.email}</td>
  <td>{user.phone}</td>
  <td>{user.birthDate} </td>
  <td>
   <button onClick={()=>(handleShow(user?.id))} className='border-0 bg-transparent'><i className="fa-solid fa-pen text-warning mx-2"></i> </button> 
   <button onClick={()=>handleShow(user?.id)} className='border-0 bg-transparent'><i className="fa-regular fa-trash-can text-warning mx-2"></i></button> 
    </td>
</tr>
)
)}


  </tbody>
</table>



</div>







    </>

  )
}
