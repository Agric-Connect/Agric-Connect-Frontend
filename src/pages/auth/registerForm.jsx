import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { googleIcon, signupImage } from "../../assets";
import { ColorRing } from "react-loader-spinner";
import { apiRegister } from "../../services/auth";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await apiRegister({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        password: data.password,
        confirmPassword: data.confirmPassword,
        email: data.email,
        role: data.role,
      });

      // Display success message
      toast.success("Registration successful!");

      // Redirect user based on their role
      if (data.role === "Farmer") {
        navigate("/farmer-dashboard");
      } else if (data.role === "Buyer") {
        navigate("/buyer");
      }

      reset(); // Reset form after successful submission
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setSubmitError(error.response.data.message); // Show specific error message from API
      } else {
        setSubmitError("Registration failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${signupImage})` }}
        ></div>
        <div
          className="w-full lg:w-1/2 p-8 lg:p-12 bg-white overflow-y-auto"
          style={{ maxHeight: "100vh" }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Register With AgriConnect
          </h2>

          <div className="mt-4 text-center">
            <p className="text-tColor">
              Already have an account?{" "}
              <Link to="/login" className="text-primary underline">
                Login
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-tColor font-medium mb-2">
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className="form-input w-full p-2 border border-gray-300 rounded"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    First Name is required
                  </p>
                )}
              </div>
              <div>
                <label className="block text-tColor font-medium mb-2">
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className="form-input w-full p-2 border border-gray-300 rounded"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    Last Name is required
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-tColor font-medium mb-2">
                Username
              </label>
              <input
                {...register("username", {
                  required: true,
                  pattern: /^[a-zA-Z0-9]+$/i,
                })}
                className="form-input w-full p-2 border border-gray-300 rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  Username is required and should contain only letters and
                  numbers
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-tColor font-medium mb-2">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="form-input w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Valid email is required
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-tColor font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="form-input w-full p-2 border border-gray-300 rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-tColor font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  validate: (value) => value === watch("password"),
                })}
                className="form-input w-full p-2 border border-gray-300 rounded"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  Passwords must match
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-tColor font-medium mb-2">
                Register As
              </label>
              <select
                {...register("role", { required: true })}
                className="form-select w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Buyer">Buyer</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">Role is required</p>
              )}
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
                "Sign Up"
              )}
            </button>

            {submitError && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {submitError}
              </p>
            )}
          </form>

          <div className="mt-4 text-center">
            <p className="text-tColor mb-2">Or</p>
            <button className="flex items-center justify-center bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 w-full">
              <img src={googleIcon} alt="Google Icon" className="mr-2" />
              Register with Google
            </button>
          </div>
          <div className="flex items-center mt-5">
            <input
              type="checkbox"
              id="termsAndConditions"
              className="mr-2"
              {...register("termsAndConditions", {
                required: "You must accept the terms and conditions",
              })}
            />
            <label htmlFor="terms" className="font-light text-black">
              I accept the{" "}
              <Link
                className="font-medium text-primary-600 hover:underline "
                to="#"
              >
                Terms and Conditions
              </Link>{" "}
            </label>{" "}
          </div>
          {errors.termsAndConditions && (
            <p className="text-red-500">{errors.termsAndConditions.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
