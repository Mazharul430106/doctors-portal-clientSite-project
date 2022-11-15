import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import {toast} from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    console.log(signupError);

    const handleSignUpForm = (data) => {
        setSignupError('')
        console.log(data)
        console.log(data.email, data.password)
        createUser(data.email, data.password)
        .then(resutl=> {
            const user = resutl.user;
            console.log(user); 
            toast('User Created Successfully'); 
            const userInfo = {
                displayName: data.name,
            }
            updateUser(userInfo)
            .then(()=> {})
            .catch(error=> console.log(error));
        })
        .catch(error=> {
            console.log(error);
            setSignupError(error.message)
        })
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-center font-bold text-3xl'>SignUp Form</h1>
                    <form onSubmit={handleSubmit(handleSignUpForm)}>
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
                            <label className='label'>Password</label>
                            <input type='password' {...register('password', {
                                required: 'Password is Required',
                                minLength: {value: 6, message: 'Password must be at least 6 characture'},
                                pattern: {value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}/, message: 'Password must be strong'}
                            })} className='input input-bordered' />
                            <span className='text-xs'>Forgot Password</span>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        {signupError && <p className='text-red-500'>{signupError}</p> } 

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