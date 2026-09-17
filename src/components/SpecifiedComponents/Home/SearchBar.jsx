import { Box, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
const SearchBar = ({searchText, setSearchText, handleSearch}) => {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: 1,
        p: 1,
        mr:2,
        mt:1,
        width:'99%',
        boxSizing:'border-box'
      }}
    > 
       <TextField id="outlined-basic" value={searchText} label="Search" sx={{flex:1}}
        onChange={(e)=>setSearchText(e.target.value)}
       />
       <IconButton onClick={handleSearch}>
         <SearchIcon fontSize="small" sx={{height:30, width:30,ml:1}} onC/>
       </IconButton>
    </Box>
  );
};

export default SearchBar;