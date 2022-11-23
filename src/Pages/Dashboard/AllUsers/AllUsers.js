import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`)
            .then(res => res.json())
    })

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'put',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successfull');
                refetch();
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody> 

                    {
                        users?.map((user, index)=>  <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-primary bg-gradient-to-r from-secondary to-primary text-white' >admin</button>}</td>
                            <td><button className='btn btn-primary bg-danger text-white' >delete</button></td>
                            
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;