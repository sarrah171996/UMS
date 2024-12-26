import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddUser() {


  let { id } = useParams();
  const [userDetails, setUserDetails] = useState({})
  console.log(id);


  let {

    register,
    handleSubmit,
    formState: { errors },

  } = useForm()


  let getUserDetails = async (id) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/users/${id}`)
      setUserDetails(data)
      console.log({ xxx: data });

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getUserDetails(id)
  }, [])



  let onSubmit = async (data) => {

    if(!id){
      try {
        const response = await axios.post('https://dummyjson.com/users/add', data)
        console.log(response);
        toast.success('user added successfully')
        navigate('/dashboard/userslist')
      } catch (error) {
        console.log(error);
  
      }
  
    }

    else{


      try {
        const response = await axios.put(`https://dummyjson.com/users/${id}`,data)
        console.log(response);
        toast.success('user updated successfully')
        navigate('/dashboard/userslist')
      } catch (error) {
        console.log(error);
  
      }



    }


  }

  let navigate = useNavigate()
  return (
    <>
      <div className='title p-3 '>
        {!id? <h3>Add User</h3> :  <h3>update User</h3>}

      </div>

      <form className='p-4 m-4 shadow-sm ' onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-details my-3 ">
              <label  > First Name</label>
              <input
                className='form-control'
                type="text"
                aria-label='firstName'
                placeholder='Enter your First Name'
                defaultValue={id ? userDetails.firstName : ''}








                {...register('firstName', { required: 'First name is required' })}

              />

            </div>
            {errors.firstName && <span className='text-danger'>{errors.firstName.message}</span>}

          </div>

          <div className="col-md-6">
            <div className="form-details my-3 ">
              <label >  Last Name</label>
              <input
                className='form-control'
                type="text"
                aria-label='lastName'
                placeholder='Enter your Last Name'
                defaultValue={id ? userDetails.lastName : ''}

                {...register('lastName', { required: 'Last name is required' })}

              />

            </div>
            {errors.lastName && <span className='text-danger'>{errors.lastName.message}</span>}

          </div>

        </div>


        <div className="row">
          <div className="col-md-6">
            <div className="form-details my-3 ">
              <label  > Email</label>
              <input
                className='form-control'
                type="email"
                aria-label='email'
                placeholder='Enter your Email'
                defaultValue={id ? userDetails.email : ''}

                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'please enter a valid email'

                  }



                })}

              />

            </div>
            {errors.email && <span className='text-danger'>{errors.email.message}</span>}

          </div>

          <div className="col-md-6">
            <div className="form-details my-3 ">
              <label >  Age</label>
              <input
                className='form-control'
                type="number"
                aria-label='age'
                placeholder='Enter your Age'
                defaultValue={id ? userDetails.age : ''}

                {...register('age', {
                  required: 'Age is required',
                  max: { value: 50, message: 'max age is 50' }
                })}

              />

            </div>
            {errors.age && <span className='text-danger'>{errors.age.message}</span>}

          </div>

        </div>


        <div className="row">
          <div className="col-md-6">
            <div className="form-details my-3 ">
              <label  > Phone Number</label>
              <input
                className='form-control'
                type="number"
                aria-label='Phone Number'
                placeholder='Enter your Phone Number'
                defaultValue={id ? userDetails.phone : ''}

                {...register('PhoneNumber', {
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
                    message: 'invalid phone numer'
                  }

                })}

              />

            </div>
            {errors.PhoneNumber && <span className='text-danger'>{errors.PhoneNumber.message}</span>}

          </div>

          <div className="col-md-6">
            <div className="form-details my-3 ">
              <label >  birth Date</label>
              <input
                className='form-control'
                type="date"
                aria-label='birthDate'
                placeholder='Enter your birth Date'
                defaultValue={id ? userDetails.birthDate : 0}

                {...register('birthDate', { required: 'Birth Date is required' })}
              />

            </div>
            {errors.birthDate && <span className='text-danger'>{errors.birthDate.message}</span>}
          </div>

        </div>
        <div className='text-center'>

          <button className='btn btn-warning w-25 border-0 text-white my-4'>Save</button>
        </div>


      </form>


    </>

  )
}
