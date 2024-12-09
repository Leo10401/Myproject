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
        const res = await axios.get(`http://localhost:5000/pet/getbyid/` +id);
        const data =res.data;
        console.log(data);
        setpetData(data)
    }
    useEffect(()=> {
        fetchpetData();
        },[]);
        const submitForm = (values) => {
            console.log(values);
            
            axios.put(`http://localhost:5000/pet/update/` +id, values)
            .then((result) =>
            {
                Router.push('/mangepets');
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
            petData !== null ?(
                <div><Formik initialValues={petData} onSubmit={submitForm}>
                    {(updateForm)=> {  
                        return (
                            <form className='flex justify-center text-start items-center h-screen flex-col' onSubmit={updateForm.handleSubmit}>
                                <div >
                                    <label> Name:</label>
                                    <input type="text"
                                    name='name'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.name} />
                                </div>
                                <div>
                                    <label> Breed:</label>
                                    <input type="text"
                                    name='breed'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.breed} />
                                </div>
                                <div>
                                    <label> age</label>
                                    <input type="text"
                                    name='age'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.age} />
                                </div>
                                <div>
                                    <label> category</label>
                                    <input type="text"
                                    name='category'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.category} />
                                </div>
                                <div>
                                    <label> detail</label>
                                    <textarea type="text"
                                    name='detail'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.detail} />
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