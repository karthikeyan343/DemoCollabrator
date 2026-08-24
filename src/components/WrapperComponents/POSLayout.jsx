import { Box } from "@mui/material";

import Sidebar from "../SpecifiedComponents/Home/Sidebar";
import Header from "../SpecifiedComponents/Home/Header";
import Main from "../SpecifiedComponents/Home/Main";
import Cart from "../SpecifiedComponents/Home/Cart";


const POSLayout = () => {
  
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "198px 1fr 330px",
        gridTemplateRows: "58px 1fr",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          gridColumn: '1/2',
          gridRow: "1 / 3",
        }}
      >
        <Sidebar />
      </Box>
      
      <Box
        sx={{
          gridColumn: "2 / 4",
          gridRow: '1/2',
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridColumn: '2 / 3',
          gridRow: '2/3',
        }}
      >
        <Main/>
      </Box>
      <Box
        sx={{
          gridColumn: '3 / 4',
          gridRow: '2/3',
        }}
      >
        <Cart/>
      </Box>
    </Box>

    


  );
};

export default POSLayout;