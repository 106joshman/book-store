import { Grid, Typography, Link } from "@mui/material";
import React from "react";
import { Logo } from "../../components/logo";
import RegisterForm from "../../components/register";

const Signup = () => {
  return (
    <Grid
      container
      direction="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#f9fafc"
    >
      <div className="w-[80%] md:w-[500px] rounded-lg shadow-md appearance-none border roundedpy-2 p-5 text-gray-700 mb-3 leading-tight bg-white focus:outline-none focus:shadow-outline">
        <Logo />
        <Typography
          mt={2}
          variant="h4"
          align="center"
          justifyContent="left"
          component="h2"
        >
          Sign up
        </Typography>
        <RegisterForm />
        <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                Already have an account?{' '}
                <Link variant="subtitle2" href="/login">
                  Login
                </Link>
              </Typography>
      </div>
    </Grid>
  );
};

export default Signup;
