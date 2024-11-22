'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {
    const {id} = useParams();
    const [petData, setpetData] =useState(null);
    const fetchpetData = async () => {
        const res = await axios.get(`http://localhost:5000/pets/getbyid/` +id);
        const data =res.data;
        console.log(data);
        setpetData(data)
    }
    useEffect(()=> {
        fetchpetData();
        },[]);
        const submitForm = (values) => {
            console.log(values);
            
            axios.put(`http://localhost:5000/pets/update/` +id, values)
            .then((result) =>
            {
                Router.push('/mangeuser');
                toast.success('user  updated successfully');
                 })
                 .catch((err) =>{
                    console.log(err);
                    toast.error(err?.response?.data?.message || 'something went wrong')
                    
                 })
            
        }
  return (
    <div>
        {
            userData !== null ?(
                <div><Formik initialValues={userData} onSubmit={submitForm}>
                    {(updateForm)=> {  
                        return (
                            <form onSubmit={updateForm.handleSubmit}>
                                <div>
                                    <label> Name:</label>
                                    <input type="text"
                                    name='name'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.name} />
                                </div>
                                <div>
                                    <label> email:</label>
                                    <input type="text"
                                    name='email'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.email} />
                                </div>
                                <div>
                                    <label> password:</label>
                                    <input type="text"
                                    name='password'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.password} />
                                </div>
                                <button type='Submit'>
                                    Submit
                                </button>
                            </form>
                    )}}
                    </Formik>
                    </div>
            ):(
                <p>Loading....</p>
            )
            
        }
    </div>
  )
}

export default UpdateUser