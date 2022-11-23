import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signInUser} = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if(token){
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        // console.log(data.email, data.password);
        signInUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)

        })
        .catch(error=> console.log(error))

    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-center font-bold text-3xl'>Login Form</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Email</label>
                            <input type='text' {...register("email", { required: 'Email is required' })} className='input input-bordered' />
                            {errors.email && <p className='text-red-500' >{errors.email?.message}</p>}
                        </div>
                        <div className='w-full form-control max-w-xs'>
                            <label className='label'>Password</label>
                            <input type='password' {...register("password", {
                                required: 'Password is required',
                                minLength: {value : 6, message:"Pasword Must be at least 6 characture"}
                            })} className='input input-bordered' />

                            <span className='text-xs'>Forgot Password</span>
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                        </div>
                        <div className='w-full form-control max-w-xs mt-5'>
                            <button type="submit" className='bg-secondary input text-white text-xl' >Login</button>
                        </div>
                        <div className='flex mt-2'>
                            <p className='mr-4'>New to Doctors Portal?</p>
                            <Link to='/register' className='text-secondary'>Create new account</Link>
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