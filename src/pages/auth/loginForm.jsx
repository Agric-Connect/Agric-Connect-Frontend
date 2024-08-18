import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { googleIcon, loginImage } from '../../assets';
import Navbar from '../../components/navbar';
import { apiLogin } from '../../services/auth'; 
import { toast } from 'react-toastify'; 
import { ColorRing } from 'react-loader-spinner';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const res = await apiLogin({
                email: data.email,
                password: data.password
            });

            // Extract role from the response
            const { role } = res.data;

            // Display success message
            toast.success("Login successful!");

            // Redirect user based on their role
            if (role === "Farmer") {
                navigate("/farmer-dashboard");
            } else if (role === "Buyer") {
                navigate("/buyer");
            } else {
                navigate("/"); // Redirect to default page if role is not recognized
            }
        } catch (error) {
            toast.error("Login failed. Please check your credentials and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <img className='w-1/2 h-full hidden lg:block' src={loginImage} alt="login image" />
            <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white overflow-y-auto" style={{ maxHeight: '100vh' }}>
                <h2 className="text-2xl font-bold text-primary mb-4 text-center">Login to AgriConnect</h2>
                
                <div className="mt-4 text-center">
                    <p className="text-tColor">Don't have an account? <Link to="/register" className="text-primary underline">Register</Link></p>
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

                    <div className="mb-4">
                        <label className="block text-tColor font-medium mb-2">Password</label>
                        <input
                            type="password"
                            {...register('password', { required: true })}
                            className="form-input w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                    </div>

                    <div className="text-right mb-4">
                        <Link to="/recover-password" className="text-primary underline">Forgot Password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <ColorRing
                                visible={true}
                                height="30"
                                width="30"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={[
                                    "#d1d5db",
                                    "#6b7280",
                                    "#4b5563",
                                    "#9ca3af",
                                    "#111827",
                                ]}
                            />
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-tColor mb-2">Or</p>
                    <button
                        className="flex items-center justify-center bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 w-full"
                    >
                        <img src={googleIcon} alt="Google Icon" className="mr-2" />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginForm;
