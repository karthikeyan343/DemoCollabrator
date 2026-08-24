import { Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
const SearchBar = ({search, setSearch}) => {
 
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
       
       <TextField id="outlined-basic" value={search} label="Search" sx={{width:'100%'}}
        onChange={(e)=>setSearch(e.target.value)}
       />
   
    </Box>
  );
};

export default SearchBar;