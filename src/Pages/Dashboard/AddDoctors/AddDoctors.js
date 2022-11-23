import React from 'react';
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { data: specialitys, isLoading } = useQuery({
        queryKey: ['specialitys'],
        queryFn: () => fetch(`http://localhost:5000/appointmentSpeciality`)
        .then(res => res.json())
    })

    const handleAddDoctors = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imgData=> {
            if(imgData.success){
                console.log(imgData.data.url);

                const doctors = {
                    name: data.name,
                    email: data.email,
                    speciality: data.Speciality,
                    image: imgData.data.url
                }

                fetch(`http://localhost:5000/doctors`,{
                    method: 'post',
                    headers:{
                        'content-type':'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctors)
                })
                .then(res=> res.json())
                .then(resutl=> {
                    console.log(resutl);
                    if(resutl.acknowledged){
                        toast.success(`${data.name} is added successfully`)
                        navigate('/dashboard/manageDoctors')
                    }
                })



            }
        })
        
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='flex justify-center items-center mt-12'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <form onSubmit={handleSubmit(handleAddDoctors)}>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Name</label>
                            <input type='text' {...register('name', { required: 'Name is Required' })} className='input input-bordered' />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Email</label>
                            <input type='text' {...register('email', { required: 'Email is Required' })} className='input input-bordered' />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Speciality</label>
                            <select {...register('Speciality')} className="select select-ghost w-full max-w-xs input input-bordered">
                       
                                {
                                    specialitys?.map(speciality => <option key={speciality._id} value={speciality.name}>{speciality.name}</option>)
                                }

                            </select>
                        </div>

                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Photo</label>
                            <input type='file' {...register('image', { required: 'photo is Required' })} className='input input-bordered' />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>

                        <div className='w-full form-control max-w-xs mt-5'>
                            <button type="submit" className='bg-secondary input text-white text-xl' >Add Doctors</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;