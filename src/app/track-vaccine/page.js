/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { Navbar } from '@/components/Navbar';
import sessionCheck from '../sessionCheck';
import { usePathname, useRouter } from "next/navigation";

const UserDashboardPage = () => {

  const router = useRouter();

  const pathname = usePathname()

  const [userPetList, setUserPetList] = useState([]);
  const [editingPet, setEditingPet] = useState(null);
  const [editedPetName, setEditedPetName] = useState('');
  const [editedPetBreed, setEditedPetBreed] = useState('');

  async function fetchUserPetList() {
    try {
      const yourName = getCookie('userName');
      const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/getUserPetList`, { yourName });
      setUserPetList(response.data.response);
    } catch (error) {
      console.error('Error fetching user pet list:', error);
    }
  }

  useEffect(() => {
    fetchUserPetList();
  }, []);

  const handleVaccinatedChange = async (id, event) => {
    const isVaccinated = event.target.value;
    const data = { id, isVaccinated };
    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/addAPet`, data);
    console.log(response.data.response);
    fetchUserPetList();
  };

  const handleDeletePet = async (id) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/deleteAPet/`, { id });
    console.log(response.data.response);
    fetchUserPetList();
  };

  const handleEditPet = (pet) => {
    setEditingPet(pet);
    setEditedPetName(pet.petName);
    setEditedPetBreed(pet.petBreed);
  };

  const handleSaveEdit = async (id) => {
    // Send the edited pet name and breed to the backend
    const data = { id, petName: editedPetName, petBreed: editedPetBreed };
    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/addAPet/`, data);
    console.log(response.data.response);
    setEditingPet(null); // Clear editing mode
    fetchUserPetList();
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="border p-2">Pet Name</th>
                <th className="border p-2">Pet Type</th>
                <th className="border p-2">Pet Breed</th>
                <th className="border p-2">Vaccinated</th>
                <th className="border p-2">Pet Vaccines</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userPetList.map((pet, index) => (
                <tr key={index}>
                  <td className="border p-2 text-center">
                    {editingPet === pet ? (
                      <input
                        type="text"
                        className="text-black"
                        value={editedPetName}
                        onChange={(event) => setEditedPetName(event.target.value)}
                      />
                    ) : (
                      pet.petName
                    )}
                  </td>
                  <td className="border p-2 text-center capitalize">{pet.petType}</td>
                  <td className="border p-2 text-center">
                    {editingPet === pet ? (
                      <input
                        type="text"
                        className="text-black"
                        value={editedPetBreed}
                        onChange={(event) => setEditedPetBreed(event.target.value)}
                      />
                    ) : (
                      pet.petBreed
                    )}
                  </td>
                  <td className="border p-2 text-black text-center">
                    <select
                      value={pet.isVaccinated}
                      onChange={(event) => handleVaccinatedChange(pet._id, event)}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td className="border p-2 text-center">
                    {pet.petVaccine.map((vaccine, vIndex) => (
                      <div key={vIndex}>
                        &bull; {vaccine}
                      </div>
                    ))}
                  </td>
                  <td className="border p-2 text-center">
                    {editingPet === pet ? (
                      <div
                        onClick={() => handleSaveEdit(pet._id)}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Save
                      </div>
                    ) : (
                      <div
                        onClick={() => handleEditPet(pet)}
                        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Edit
                      </div>
                    )}
                    <div
                      onClick={() => handleDeletePet(pet._id)}
                      className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserDashboardPage;