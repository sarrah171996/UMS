import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function UsersList() {

  const [users, setUser] = useState([])

  const [show, setShow] = useState(false);

  const [userData, setUserData] = useState()
  const [userId, setUserId] = useState()

  // console.log({
  //   userId: userId,
  //   userData: userData
  // });
  

  const handleClose = () => setShow(false);

  const handleShow = (user) => {
    setUserId(user.id)
    setUserData(user)
    setShow(true)  };



  const getUsers = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/users')
      setUser(response.data.users);



    } catch (error) {
      console.log(error);

    }

  }

  const deleteUser = async () => {
    try {

      let response = await axios.delete(`https://dummyjson.com/users/${userId}`)
      console.log({ users: users });

      console.log({ res: response });
      toast.success('deleted successfully')
      handleClose()

    } catch (error) {
      console.log(error);

    }
  }

  const getId =async(user)=>{
    setUserId(user.id)
      setUserData(user)
     await editUser()
   }
 

  const editUser = async()=>{
    try {

      let {data} = await axios.put(`https://dummyjson.com/users/${userId}`)
      console.log(data);
      setUserData(data)
      // handleClose()
   navigateToEditUserData()

    } catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {
    getUsers()
  }, [])


  let navigate = useNavigate()

  let navigateToUserData = () => {
    navigate('/dashboard/adduser')
  }

  let navigateToEditUserData = () => {
    // console.log(userId);
    
    navigate(`/dashboard/adduser/${userData.id}`)
  }



  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete {userData?.firstName} {userData?.lastName} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="warning" onClick={deleteUser} >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>



      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to edit {userData?.firstName} {userData?.lastName} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="warning" onClick={editUser} >
            Yes
          </Button>
        </Modal.Footer>
      </Modal> */}

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

            {users.map((user: any) => (
              <tr key={user.id}>
                <th scope="row"><img className='w-25' src={user.image} alt="" /></th>
                <td>{user.firstName} {user.lastName} </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate} </td>
                <td>
                  <button onClick={()=>getId(user)} className='border-0 bg-transparent'><i className="fa-solid fa-pen text-warning mx-2"></i> </button>
                  <button onClick={() => handleShow(user)} className='border-0 bg-transparent'><i className="fa-regular fa-trash-can text-warning mx-2"></i></button>
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
