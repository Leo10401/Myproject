'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddPet = () => {
  const [previewUrl, setPreviewUrl] = useState('');

  const addpet = useFormik({
    initialValues: {
      name: '',
      age: '',
      category: '',
      breed: '',
      details: '',
      image: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      axios.post('http://localhost:5000/pet/add/', values)
        .then((result) => {
          toast.success('Pet Added');
          console.log(result.data);
          resetForm();
        })
        .catch((err) => {
          toast.error('Something is wrong');
          console.log(err);
        });

    },
  });

  const uploadfile = (e) => {
    const file = e.target.files[0];

    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('upload_preset', 'myuploadpreset');
    formdata.append('cloud_name', 'de4osq89e');

    axios.post('https://api.cloudinary.com/v1_1/de4osq89e/image/upload', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((result) => {
        toast.success('File Uploaded Successfully');
        console.log(result.data);
        setPreviewUrl(result.data.url);
        addpet.setFieldValue('image', result.data.url);
      })
      .catch((err) => {
        console.log(err);
        toast.error('File Upload Failed');
      });
  };

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-row">
        <form onSubmit={addpet.handleSubmit}>
          {/* Contact Us */}

          <div className="max-w-xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Add Your Pet
              </h1>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We'd love to talk about how we can help you.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            {/* Card */}

            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Give the details of the pet
              </h2>

              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Pet's Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={addpet.values.name}
                      onChange={addpet.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      value={addpet.values.age}
                      onChange={addpet.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>

                {/* End Grid */}

                {/* Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        value={addpet.values.category}
                        onChange={addpet.handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="breed"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Breed
                      </label>
                      <input
                        type="text"
                        name="breed"
                        id="breed"
                        value={addpet.values.breed}
                        onChange={addpet.handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                  </div>
  
                  {/* End Grid */}
  
                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Upload Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={uploadfile}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
  
                  <div>
                    <label
                      htmlFor="details"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={addpet.values.details}
                      onChange={addpet.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>
  
                <button
                  type="submit"
                  className="w-full border py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg text-white font-bold"
                >
                  Add Pet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddPet;