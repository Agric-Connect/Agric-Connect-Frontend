import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { googleIcon, signupImage } from '../../assets';

const RegistrationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
                <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${signupImage})` }}></div>
                <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white overflow-y-auto" style={{ maxHeight: '100vh' }}>
                    <h2 className="text-2xl font-bold text-primary mb-4 text-center">Register With AgriConnect</h2>
                    
                    <div className="mt-4 text-center">
                        <p className="text-tColor">Already have an account? <Link to="/login" className="text-primary underline">Login</Link></p>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-tColor font-medium mb-2">First Name</label>
                                <input
                                    {...register('firstName', { required: true })}
                                    className="form-input w-full p-2 border border-gray-300 rounded"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm mt-1">First Name is required</p>}
                            </div>
                            <div>
                                <label className="block text-tColor font-medium mb-2">Last Name</label>
                                <input
                                    {...register('lastName', { required: true })}
                                    className="form-input w-full p-2 border border-gray-300 rounded"
                                />
                                {errors.lastName && <p className="text-red-500 text-sm mt-1">Last Name is required</p>}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-tColor font-medium mb-2">Email</label>
                            <input
                                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                className="form-input w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-tColor font-medium mb-2">Password</label>
                            <input
                                type="password"
                                {...register('password', { required: true, minLength: 6 })}
                                className="form-input w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-tColor font-medium mb-2">Confirm Password</label>
                            <input
                                type="password"
                                {...register('confirmPassword', { validate: value => value === watch('password') })}
                                className="form-input w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">Passwords must match</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-tColor font-medium mb-2">Register As</label>
                            <select
                                {...register('role', { required: true })}
                                className="form-select w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="">Select Role</option>
                                <option value="farmer">Farmer</option>
                                <option value="buyer">Buyer</option>
                            </select>
                            {errors.role && <p className="text-red-500 text-sm mt-1">Role is required</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark w-full"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-tColor mb-2">Or</p>
                        <button
                            className="flex items-center justify-center bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 w-full"
                        >
                            <img src={googleIcon} alt="Google Icon" className="mr-2" />
                            Register with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
