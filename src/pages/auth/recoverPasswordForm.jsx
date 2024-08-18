import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { recoverPasswordImage } from '../../assets';
import Navbar from '../../components/navbar';

const RecoverPasswordForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
                <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${recoverPasswordImage})` }}></div>
                <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white overflow-y-auto" style={{ maxHeight: '100vh' }}>
                    <h2 className="text-2xl font-bold text-primary mb-4 text-center">Recover Password</h2>
                    
                    <div className="mt-4 text-center">
                        <p className="text-tColor">Remembered your password? <Link to="/login" className="text-primary underline">Login</Link></p>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="mb-4">
                            <label className="block text-tColor font-medium mb-2">Email</label>
                            <input
                                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                className="form-input w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark w-full"
                        >
                            Send Recovery Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default RecoverPasswordForm;
