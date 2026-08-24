import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const BillingCart = ({discount}) => {
  const [Items, setItems] = useState([
    {
      id: 1,
      title: "Aavin Milk 500ml",
      price: 25,
      PPU: 25,
      count: 1,
    },
    {
      id: 2,
      title: "Aashirvad Aatta 5Kg",
      price: 245,
      PPU: 245,
      count: 1,
    },
    {
      id: 3,
      title: "Nescafe classic 50g",
      price: 160,
      PPU: 160,
      count: 1,
    },
  ]);

  const handleRemove = (id) => {
    setItems((prevItem) =>
      prevItem.map((item) =>
        item.id == id && item.count > 1
          ? {
              ...item,
              count: item.count - 1,
              price: item.PPU * (item.count - 1),
            }
          : item,
      ),
    );
  };

  const handleInc = (id) => {
    setItems((prevItem) =>
      prevItem.map((item) =>
        item.id == id
          ? {
              ...item,
              count: item.count + 1,
              price: item.PPU * (item.count + 1),
            }
          : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setItems((prevItem) => prevItem.filter((item) => item.id != id));
  };

  const subtotal = Items.reduce((sum, item) => sum + item.price, 0);

  const totalQuantity = Items.reduce((total, item) => total + item.count, 0);

  const Total = subtotal - discount;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 1,
        boxSizing: "border-box",
      }}
    >
      {Items.map((items) => {
        return (
          <Box
            key={items.id}
            sx={{
              border: "1px solid #d5dbe5",
              borderRadius: 2,
              p: 1,
              mb: 1.2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>{items.title}</Typography>

              <Typography sx={{ fontWeight: 600 }}>₹{items.price}</Typography>
            </Box>

            <Typography sx={{ color: "text.secondary" }}>
              ₹{items.PPU} / unit
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #d5dbe5",
                  borderRadius: 1.5,
                  overflow: "hidden",
                  height: "35px",
                }}
              >
                <Button
                  sx={quantityButton}
                  onClick={() => handleRemove(items.id)}
                >
                  <RemoveIcon />
                </Button>

                <Box sx={quantityNumber}>{items.count}</Box>

                <Button sx={quantityButton} onClick={() => handleInc(items.id)}>
                  <AddIcon />
                </Button>
              </Box>
              <Button
                sx={{
                  color: "#d32f2f",
                  ml: "auto",
                }}
                onClick={() => {
                  handleDelete(items.id);
                }}
              >
                <DeleteIcon />
              </Button>
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          border: "1px solid grey",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            borderBottom: "1px solid grey",
          }}
        >
          <Box>
            <Typography>Subtotal ({totalQuantity} items):</Typography>
            <Typography>Discount(Loyalty):</Typography>
            <Typography sx={{ fontWeight: "bold" }}>GSTCalculated:</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              ₹{subtotal.toFixed(2)}
            </Typography>
            <Typography sx={{ color: "green" }}>
              -₹{discount.toFixed(2)}
            </Typography>
            <Typography>included</Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "0.8px solid grey",
            }}
          >
            <Typography sx={{ mt: 2, ml: 1, fontSize: "20px" }}>
              Total:
            </Typography>
            <Typography
              sx={{ fontSize: "30px", fontWeight: "200px", mr: 1, mt: 0.5 }}
            >
              {Total.toFixed(2)}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                mt: 1,
              }}
            >
              <Button variant="outlined">Hold Bill</Button>
            </Box>
            <Box
              sx={{
                height: "20px",
                width: "80px",
                mr: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                mt: 1,
              }}
            >
              <Button variant="outlined">Print</Button>
            </Box>
          </Box>
          <Button variant="contained" sx={{ m: 3, borderRadius: 2 }}>
            Proceed to Payment ₹{Total.toFixed(2)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const quantityButton = {
  width: 48,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f5f6f8",
};

const quantityNumber = {
  width: 55,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderLeft: "1px solid #d5dbe5",
  borderRight: "1px solid #d5dbe5",
};

export default BillingCart;
