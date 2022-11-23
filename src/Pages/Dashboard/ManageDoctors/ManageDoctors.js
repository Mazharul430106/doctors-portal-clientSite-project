import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfermationModal from '../../Shared/ConfermationModal/ConfermationModal';
import { toast } from 'react-hot-toast';
import {  refetch } from '@tanstack/react-query'

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = ()=>{
        setDeletingDoctor();
    }

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch(`http://localhost:5000/doctors`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
    })


    const handleDeletingDoctor = doctor =>{
        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'delete',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }            
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount > 0){
                refetch();
                toast.success(`doctor ${data.name} deleted successfully`);
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialist</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => 
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div>
                                </th>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="Confermation-Modal" className="btn btn-sm btn-primary"> Delete </label>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {
                deletingDoctor && <ConfermationModal

                    title ={`Are You Want to Sure Delete Doctor`}
                    message={`If You delete ${deletingDoctor.name} you will can't get the data back`}
                    successAction={handleDeletingDoctor}
                    modalData = {deletingDoctor}
                    deleteButtonData = 'delete'
                    closeModal={closeModal}
                >

                </ConfermationModal>
            }


        </div>

    );
};

export default ManageDoctors;