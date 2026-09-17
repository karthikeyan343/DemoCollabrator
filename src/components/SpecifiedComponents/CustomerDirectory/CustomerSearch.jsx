import React from "react";
import { Box, IconButton, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const CustomerSearch = ({
  searchValue,
  onSearchChange,
  onClear,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        border: "1px solid #c2c6d6",
        borderRadius: "9px",
        p: 1,
        mb: 1.5,
      }}
    >
      <TextField
        fullWidth
        value={searchValue}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        placeholder="Search by name, mobile number, or email (F3)"
        variant="standard"
        InputProps={{
          disableUnderline: true,

          startAdornment: (
            <SearchIcon
              sx={{
                color: "#727785",
                mr: 1,
                fontSize: 18,
              }}
            />
          ),

          endAdornment: (
            <IconButton
              size="small"
              onClick={onClear}
              disabled={!searchValue}
            >
              <CloseIcon
                sx={{
                  fontSize: 17,
                  color: "#727785",
                }}
              />
            </IconButton>
          ),
        }}
        sx={{
          "& input": {
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            color: "#424754",
            py: 0.8,
          },
        }}
      />
    </Box>
  );
};

export default CustomerSearch;