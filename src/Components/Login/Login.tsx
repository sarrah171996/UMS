import React from 'react'

export default function Login() {
  return (

<div className="container-fluid bg-warning' login-container">

<div className="row vh-100 justify-content-center align-items-center">
  <div className="col-md-4">
    <div className='bg-white rounded p-4 '>
      <div className="title text-center">
      <h3>User Managment System</h3>
      <h4 className='my-3'>Sign In</h4>
      <small>Enter your credentials to access your account</small>

      </div>

      <form>
        <div className="form-details my-3 ">
          <label > Email</label>
          <input className='form-control' type="email" placeholder='Enter Your Email'/>

          <label > Password</label>
          <input className='form-control my-2' type="password" placeholder='Enter Your Password'/>

        </div>

        <button className='btn btn-warning w-100 text-white my-4'>Sign in</button>
      </form>

    </div>
  </div>
</div>
</div>



  )
}
