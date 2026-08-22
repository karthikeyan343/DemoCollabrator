import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: 1,
        p: 1.5,
        mr:2,
        mt:1
      }}
    >
      <SearchIcon fontSize="small" />
       
       <TextField id="outlined-basic" label="Search" sx={{width:'100%'}} />
   
    </Box>
  );
};

export default SearchBar;