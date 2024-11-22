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
       <div className='container h-screen flex justify-center items-center'>
       <div className="card">
            <div className="bg">
            {
                petData !== null ? (
                    <div className='container grid grid-cols-6 gap-3 grid-rows-6'>
                        <div className=" col-span-3 row-span-6 object-cover ">
                            <img src={petData.image} alt="Pet Image" ></img>
                            </div>
                    <div class="parent">
                    <div class="card2">
                        <div class="content-box row-span-6">
                            <span class="card2-title">{petData.name}</span>
                            <span class="card2-title">{petData.breed}</span>
                            <p class="card2-content">
                                {petData.details} 
                            
                            <div>
                                {petData.category}
                            </div>
                            <div>
                                {petData.breed}
                            </div></p>
                            <span class="see-more">See More</span>
                        </div>
                        <div class="date-box">
                            <span class="month">Age</span>
                            <span class="date">{petData.age}</span>
                        </div>
                    </div>
                    </div>
                    </div>
                ) : (
                    <div class="YoutubeVideo">
                    <div class="Image"></div>
                    <div class="Icon"></div>
                    <div class="Title"></div>
                    <div class="Name"></div>
                    </div>
                )
            }
                 </div>
            <div className="blob" />
            
        </div>
        </div>
        
    )
}

export default PetDetails;