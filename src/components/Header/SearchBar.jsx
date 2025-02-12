import React from "react";
import { useState } from "react";
import { Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    const [clicked, setClicked] = useState(false)
  return (
    <TextField
      placeholder="Search products..."
      variant="outlined"
      fullWidth
      sx={{
        borderRadius: "25px",
        bgcolor: "white",
        width: "400px",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button variant="contained"
            onClick={() => setClicked(!clicked)}
            sx={{
              minWidth: "40px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: clicked ? "grey" : "transparent",
              color: clicked ? "white" : "black",  // Change text color accordingly
              "&:hover": {
                backgroundColor: "grey", // Changes color on hover
                color: "white",
              },
              border: clicked ? "none" : "1px solid gray", // Optional border when not clicked
            }}
            >
              <SearchIcon />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
