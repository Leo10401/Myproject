'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Petlist = () => {
  const [petList, setPetList] = useState([]);

  const fetchPetData = async () => {
    const res = await axios.get('http://localhost:5000/pet/getall/');
    const data = res.data;
    console.log(data);
    setPetList(data);
  }

  useEffect(() => {
    fetchPetData();
  }, [])


  return (
    <div>

      <div class="flex flex-wrap justify-center">
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {
            petList.map(pet => (
              <li class="bg-card p-4 rounded-lg">
                <img src="https://openui.fly.dev/openui/300x300.svg?text=Dog4" alt="Dog 4" class="w-full h-48 object-cover rounded-lg mb-2" />
                <h2 class="text-lg font-semibold">{pet.name}</h2>
                <p class="text-sm text-muted-foreground">Breed: {pet.breed}</p>
                <button class="bg-primary text-primary-foreground px-4 py-2 rounded-lg mt-2 hover:bg-primary/80">Adopt Now</button>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  )
}

export default Petlist