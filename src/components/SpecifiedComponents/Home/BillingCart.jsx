import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';
import PrintIcon from '@mui/icons-material/Print';
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
  const appliedDiscount = Items.length == 0?0 : discount;
  const Total = subtotal - appliedDiscount;

  const handleHoldBill = () => {

    if (Items.length === 0) {
      alert("Cart is empty");
      return;
    }

    const heldBill = {
      id: Date.now(),
      items: Items,
      subtotal: subtotal,
      discount: discount,
      total: Total,
      totalQuantity: totalQuantity,
      date: new Date().toLocaleString(),
    };
    const oldBills =
      JSON.parse(localStorage.getItem("heldBills")) || [];
    localStorage.setItem(
      "heldBills",
      JSON.stringify([
        ...oldBills,
        heldBill
      ])
    );
    setItems([]);
    alert("Bill held successfully");
  };

  const handlePrint = () => {

    if (Items.length === 0) {
      alert("Cart is empty");
      return;
    }

    window.print();
  };


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
          backgroundColor: "#f5f6f8",
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
    gap: 2,
    width: "98%",
    mt: 2,
  }}
>
  <Button
    variant="outlined"
    startIcon={<PauseIcon />}
     onClick={handleHoldBill}
    sx={{
      flex: 1,
      height: 45,
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      ml:1,
      color: "black",
      borderColor: "#ccc",
    }}
  >
    Hold Bill
  </Button>

  <Button
    variant="outlined"
    startIcon={<PrintIcon />}
    onClick={handlePrint}
    sx={{
      flex: 1,
      height: 45,
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      color: "black",
      borderColor: "#ccc",
    }}
  >
    Print
  </Button>
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
