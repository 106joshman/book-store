import { Link } from "@mui/material";
import React from "react";

const HeaderNavList = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4">
        <Link href="/" component="h1" underline="none" sx={{ typography: 'body2', fontSize: 32, color: "black" }}>BS</Link>
        <div className="left">
            <Link href="/login" underline="none" sx={{px:1, color: "black"}}>Login</Link>
            <Link href="/signup" underline="none" sx={{px:1, color: "black"}}>Signup</Link>
        </div>
      </nav>
    </>
  );
};

export default HeaderNavList;
