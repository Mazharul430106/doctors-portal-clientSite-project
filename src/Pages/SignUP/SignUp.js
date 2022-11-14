import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignUp = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleSignUpForm = (data)=>{
        console.log(data);
        console.log(errors)
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-center font-bold text-3xl'>SignUp Form</h1>
                    <form onSubmit={handleSubmit(handleSignUpForm)}>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Name</label>
                            <input type='text' {...register('name', {required: 'Name is Required'} )} className='input input-bordered'/>
                            {errors.name  && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Email</label>
                            <input type='text' {...register('email', {required: 'Email is Required'} )} className='input input-bordered'/>
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Password</label>
                            <input type='text' {...register('password', {required: 'Password is Required'})} className='input input-bordered'/>
                            <span className='text-xs'>Forgot Password</span>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>

                        <div className='w-full form-control max-w-xs mt-5'>
                            <button type="submit" className='bg-secondary input text-white text-xl' >Sign Up</button>
                        </div>

                        <div className='flex mt-2'>
                            <p className='mr-4'>All Ready Have an Account</p>
                            <Link to='/login' className='text-secondary'>Please Login</Link>
                        </div>

                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                    </form>

                    <div className='w-full form-control max-w-xs'>
                        <button type='submit' className='input input-bordered justify-center text-xl'>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;