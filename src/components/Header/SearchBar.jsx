import React from "react";
import { useState,useRef,useEffect} from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchData } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  let debounceTimer = useRef(null);

  const handleSearch = async (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === "") {
    setResults([]);
    return;
  }

  setLoading(true);
  try {
    // Directly assign the result
    const result = await fetchData(`/api/product/search?query=${searchTerm}`);

    // Log to confirm structure
    console.log("Search result:", result);

    // Use the result directly, not result.data
    if (result && result.products) {
      setResults(result.products);
    } else {
      console.warn("Unexpected search response:", result);
      setResults([]);
    }
  } catch (err) {
    console.error("Search error:", err);
    setResults([]);
  } finally {
    setLoading(false);
  }
};


  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowDropdown(true);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      handleSearch(value);
    }, 400);
  };

  const handleResultClick = (productId) => {
    setQuery("");
    setShowDropdown(false);
    navigate(`/ProductDetails/${productId}`);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box sx={{ position: "relative", width: "400px" }} ref={dropdownRef}>
      <TextField
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        variant="outlined"
        size="small"
        fullWidth
        sx={{ bgcolor: "white", borderRadius: "5px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Dropdown Results */}
      {showDropdown && query && (
        <Paper
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 1000,
            maxHeight: "300px",
            overflowY: "auto",
            mt: 1,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          {loading ? (
            <Box sx={{ textAlign: "center", py: 2 }}>
              <CircularProgress size={24} />
            </Box>
          ) : results.length > 0 ? (
            results.map((item) => (
              <Box
                key={item._id}
                sx={{
                  px: 2,
                  py: 1,
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleResultClick(item._id)}
              >
                <Typography fontWeight="bold">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.brand} — ₹{item.price}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography sx={{ px: 2, py: 1, color: "gray" }}>
              No results found
            </Typography>
          )}
        </Paper>
      )}
    </Box>
  );
};


export default SearchBar;
