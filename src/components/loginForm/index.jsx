import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import { Stack, Button,Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const LoginDetails = {
    email: "xyz@gmail.com",
    password: "12345",
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      if (email === LoginDetails.email && password === LoginDetails.password) {
        navigate("/");
        console.log(email, password);
      } else if (email === "" && password === "") {
        setEmailError("Enter a valid address");
        setPassError("Enter correct password");
      } else if (password.length < 6) {
        setPassError("Password should be minimum of 8");
      }else if(email !== LoginDetails.email && password !== LoginDetails.password){
        setPassError("Incorrect login details")
      }
    }, 2000);
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <Stack direction="column" spacing={2}>
          <div className="email mt-4">
            <label htmlFor="" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2 h-[46px] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <Alert severity="error">{emailError}</Alert>}
          </div>

          <div className="passwrd">
            <label htmlFor="" className="block mb-2 text-sm">
              Password
            </label>
            <div className="w-full border border-gray-300 rounded-md px-2 py-0.5 outline-none flex justify-between items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="outline-none border-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                <Icon
                  icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                />
              </IconButton>
            </div>
            {passError && <Alert severity="error">{passError}</Alert>}
          </div>
        </Stack>

        <Stack direction="row" justifyContent="center" sx={{ my: 2 }}>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            className="w-full"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
