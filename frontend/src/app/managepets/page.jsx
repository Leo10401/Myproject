'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

const ManagePet = () => {
  const [petList, setPetList] = useState([]);
  const router = useRouter();

  const fetchPets = () => {
    axios.get('http://localhost:5000/pet/getall')
      .then((res) => {
        console.table(res.data);
        setPetList(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 403) router.push('/addpet');
      });
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const deletepets = (id) => {
    axios.delete('http://localhost:5000/pet/delete/' + id)
        .then((result) => {
            fetchPets();
            toast.success('User deleted successfully');
        }).catch((err) => {
            console.log(err);
            toast.error('Something went wrong');
        });
}




  const displayPets = () => {
    if (petList.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <table className='w-full'>
          <thead className='bg-blue-800 text-white text-left'>
            <tr>
              <th className='p-2'>Pet&apos;s name</th>
              <th className='p-2'>Breed</th>
              <th className='p-2'>Age</th>
              <th className='p-2'>Category</th>
              <th className='p-2'>Details</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody className='bg-blue-200'>
            {petList.map((pet) => {
              return (
                <tr key={pet._id}>
                  <td className='p-2 border border-blue-400'>{pet.name}</td>
                  <td className='p-2 border border-blue-400'>{pet.breed}</td>
                  <td className='p-2 border border-blue-400'>{pet.age}</td>
                  <td className='p-2 border border-blue-400'>{pet.category}</td>
                  <td className='p-2 border border-blue-400'>{pet.detail}</td>
                  <td className='p-2 border border-blue-400'>
                    <Link
                      href={'/updatepet/' + pet._id}
                      className='bg-blue-500 rounded-full py-1 px-3 text-white'
                    >
                      Edit
                    </Link>
                  </td>
                  <td className='p-2 border border-blue-400'>
                    <button
                      onClick={() => deletepets(pet._id)}
                      className='bg-red-500 rounded-full py-1 px-3 text-white'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  

};
  return (
    <div className='max-w-[80%] mx-auto border mt-8 p-6 shadow rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Manage Pets</h1>
      {displayPets()}
    </div>
  );
};


export default ManagePet;