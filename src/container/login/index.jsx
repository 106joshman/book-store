import React from "react";
import Grid from "@mui/material/Grid";
import LoginForm from "../../components/loginForm";
import { Logo } from "../../components/logo";
import { Typography, Link } from "@mui/material";

const Login = () => {
  return (
    <Grid
      container
      direction="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#f9fafc"
    >
      <div className="w-[80%] md:w-[400px] rounded-lg shadow-md appearance-none border roundedpy-2 p-5 text-gray-700 mb-3 leading-tight bg-white focus:outline-none focus:shadow-outline">
        <Logo />
        <Typography
          mt={2}
          variant="h4"
          align="center"
          justifyContent="center"
          component="h2"
        >
          Sign in
        </Typography>
        <LoginForm />
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don’t have an account?{" "}
          <Link variant="subtitle2" href="/signup">
            Get started
          </Link>
        </Typography>
      </div>
    </Grid>
  );
};

export default Login;
