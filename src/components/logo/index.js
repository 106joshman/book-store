import { Box } from "@mui/material";
import React from "react";
import Book from "../../assets/book.jpg";

export const Logo = () => {
  return (
    // , cursor: 'pointer',
    <Box sx={{ width: 100, height: 100, margin: "auto" }}>
      <img src={Book} alt="Logo" srcSet="" />
    </Box>
  );
};
