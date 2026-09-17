import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "../SpecifiedComponents/Home/Sidebar";
import Header from "../SpecifiedComponents/Home/Header";
import Main from "../SpecifiedComponents/Home/Main";
import Cart from "../SpecifiedComponents/Home/Cart";

const POSLayout = () => {

  const [Items, setItems] = useState([]);

  const handleAddToCart = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                count: item.count + 1,
                price: item.PPU * (item.count + 1),
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: product.id,
          title: product.title,
          PPU: product.price,
          price: product.price,
          count: 1,
        },
      ];
    });
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "198px 1fr 330px",
        gridTemplateRows: "58px minmax(0, 1fr)",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          gridColumn: "1 / 2",
          gridRow: "1 / 3",
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        <Sidebar />
      </Box>
      
      <Box
        sx={{
          gridColumn: "2 / 4",
          gridRow: "1 / 2",
          minWidth: 0,
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridColumn: "2 / 3",
          gridRow: "2 / 3",
          minWidth: 0,
          minHeight: 0,
          overflowY: "auto",
        }}
      >
         <Main onAddToCart={handleAddToCart} />
      </Box>
      <Box
        sx={{
          gridColumn: "3 / 4",
          gridRow: "2 / 3",
          minWidth: 0,
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        <Cart
          Items={Items}
          setItems={setItems}
        />
      </Box>

    </Box>

    


  );
};

export default POSLayout;