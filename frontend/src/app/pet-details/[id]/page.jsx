'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import './style.css'

const PetDetails = () => {

    const { id } = useParams();
    const [petData, setpetData] = useState(null);
    const fetchpetData = async () => {
        const res = await axios.get(`http://localhost:5000/pet/getbyid/` + id);
        const data = res.data;
        console.log(data);
        setpetData(data)
    }
    useEffect(() => {
        fetchpetData();
    }, []);
    return (
                petData !== null ? (
                <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img src={petData.image}  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" alt="https://dummyimage.com/400x400" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{petData.category}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{petData.name}</h1>
                        <div className="flex mb-4">

                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        </span>
                        </div>
                        <span className="title-font font-medium text-2xl text-gray-900">{petData.breed}</span>
                        <div className="flex flex-col">
                           <p className="leading-relaxed">{petData.detail}</p>
                            <button className="relative  inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]">
                            </span>
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                                Contact me
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                                </svg>
                            </span>
                            </button>



                        </div>
                    </div>
                    </div>
                </div>
                </section>


                ) : (
                    <div class="YoutubeVideo">
                    <div class="Image"></div>
                    <div class="Icon"></div>
                    <div class="Title"></div>
                    <div class="Name"></div>
                    </div>
                )
    )}

export default PetDetails;