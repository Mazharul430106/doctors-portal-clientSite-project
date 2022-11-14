import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-center font-bold text-3xl'>Login Form</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Email</label>
                            <input type='text' {...register("email")} className='input input-bordered' required />
                        </div>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Password</label>
                            <input type='text' {...register("password")} className='input input-bordered' required />
                            <span className='text-xs'>Forgot Password</span>
                        </div>
                        <div className='w-full form-control max-w-xs mt-5'>
                            <button type="submit" className='bg-secondary input text-white text-xl' >Login</button>
                        </div>
                        <div className='flex mt-2'>
                            <p className='mr-4'>New to Doctors Portal?</p>
                            <p className='text-secondary'>Create new account</p>
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

export default Login;