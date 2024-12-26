import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

export default function Login() {


 let{register ,handleSubmit ,formState:{errors}} =useForm()
 
 let navigate =useNavigate()


 let onSubmit = async(data) => {
  try {
    let response =await axios.post('https://dummyjson.com/auth/login',data)
    console.log(response);
    toast.success("success !")
    navigate('/dashboard/')

  } catch (error) {
    toast.error("noooo!")
    console.log(error);
    
  }
 }

  return (
    <>

<div className="container-fluid bg-warning' login-container">

<div className="row vh-100 justify-content-center align-items-center">
  <div className="col-md-4">
    <div className='bg-white rounded p-4 '>
      <div className="title text-center">
      <h3>User Managment System</h3>
      <h4 className='my-3'>Sign In</h4>
      <small>Enter your credentials to access your account</small>

      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-details my-3 ">
          <label > User Name</label>
          <input className='form-control' type="text" placeholder='Enter Your User Name'
            {...register("username" , {required : "username is required"})} 
            />
            {errors.username && <p className='text-danger'>{errors.username.message}</p>}

          <label > Password</label>
          <input className='form-control my-2' type="password" placeholder='Enter Your Password'
            // {...register("password")} 
            {...register("password" , {required : "password is required"})} 

          />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}

        </div>

        <button  className='btn btn-warning w-100 text-white my-4'>Sign in</button>

      </form>

    </div>
  </div>
</div>
</div>

</>


  )
}
