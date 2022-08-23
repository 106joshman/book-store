import { Alert, Button, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleReg = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    firstName: { required: "First name is required" },
    lastName: { required: "Last name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleReg, handleError)}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <div className="fName">
            <label className="block mb-2 text-sm" htmlFor="first Name">
              First Name
            </label>
            <input
              className="border border-gray-300 w-full rounded-md p-2"
              placeholder="First Name"
              type="text"
              name="firstName"
              {...register("firstName", registerOptions.firstName)}
            />
            {errors?.firstName && (
              <Alert severity="error">{errors.firstName.message}</Alert>
            )}
          </div>

          <div className="lName">
            <label className="block mb-2 text-sm" htmlFor="first Name">
              Last Name
            </label>
            <input
              className="border border-gray-300 w-full rounded-md p-2"
              placeholder="Last Name"
              type="text"
              name="lastName"
              {...register("lastName", registerOptions.lastName)}
            />
            {errors?.lastName && (
              <Alert severity="error">{errors.lastName.message}</Alert>
            )}
          </div>
        </Stack>

        <div className="mt-2.5 email">
          <label className="block mb-2 text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Email"
            type="email"
            name="email"
            {...register("email", registerOptions.email)}
          />
          {errors?.email && (
            <Alert severity="error">{errors.email.message}</Alert>
          )}
        </div>

        <div className="mt-2.5 password">
          <label className="block mb-2 text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Password"
            type="password"
            name="password"
            {...register("password", registerOptions.password)}
          />
          {errors?.password && (
            <Alert severity="error">{errors.password.message}</Alert>
          )}
        </div>

        <Stack direction="row" justifyContent="center" sx={{ my: 2 }}>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            className="w-full"
          >
            Register
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default RegisterForm;
