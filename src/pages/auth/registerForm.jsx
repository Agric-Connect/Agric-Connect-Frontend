import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { googleIcon, signupImage } from "../../assets";
import { ColorRing } from "react-loader-spinner";
import { apiRegister, apiCheckUsernameExists } from "../../services/auth";
import { toast } from "react-toastify";
import Navbar from "../../components/navbar";
import { debounce } from "lodash";

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
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const navigate = useNavigate();

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

      toast.success("Registration successful!");

      if (data.role === "Farmer") {
        navigate("/farmer-dashboard");
      } else if (data.role === "Buyer") {
        navigate("/buyer");
      }

      reset();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setSubmitError(error.response.data.message);
      } else {
        setSubmitError("Registration failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const checkUserName = async (username) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExists(username);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred!");
    } finally {
      setIsUsernameLoading(false);
    }
  };

  const userNameWatch = watch("username");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUserName(userNameWatch);
      }
    }, 1000);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [userNameWatch]);

  return (
    <>
      <Navbar />
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
                    pattern: /^[a-zA-Z0-9_]+$/i,
                  })}
                  className="form-input w-full p-2 border border-gray-300 rounded"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    Username is required and should contain only letters,
                    numbers, and underscores
                  </p>
                )}
                <div>
                  {isUsernameLoading && (
                    <ColorRing
                      visible={true}
                      height="30"
                      width="30"
                      ariaLabel="loading"
                      colors={[
                        "#d1d5db",
                        "#6b7280",
                        "#4b5563",
                        "#9ca3af",
                        "#111827",
                      ]}
                    />
                  )}
                  {usernameAvailable && (
                    <p className="bg-secondary text-white p-2 rounded">
                      Username is available!
                    </p>
                  )}
                  {usernameNotAvailable && (
                    <p className="bg-red-500 text-white p-2 rounded">
                      Username is already taken!
                    </p>
                  )}
                </div>
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
                  {...register("password", { required: true, minLength: 8 })}
                  className="form-input w-full p-2 border border-gray-300 rounded"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    Password must be at least 8 characters
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
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords must match",
                  })}
                  className="form-input w-full p-2 border border-gray-300 rounded"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
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
              <label
                htmlFor="termsAndConditions"
                className="font-light text-black"
              >
                I accept the{" "}
                <Link
                  className="font-medium text-primary-600 hover:underline"
                  to="#"
                >
                  Terms and Conditions
                </Link>{" "}
              </label>{" "}
              {errors.termsAndConditions && (
                <p className="text-red-500">
                  {errors.termsAndConditions.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
