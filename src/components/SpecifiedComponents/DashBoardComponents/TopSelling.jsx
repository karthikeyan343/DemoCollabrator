import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import EggIcon from "@mui/icons-material/Egg";
import CookieIcon from "@mui/icons-material/Cookie";

const products = [
  {
    name: "Aavin Milk 500ml",
    category: "Dairy • 142 units",
    amount: "₹3,408",
    icon: <WaterDropIcon />,
  },
  {
    name: "Modern Bread",
    category: "Bakery • 85 units",
    amount: "₹2,975",
    icon: <BakeryDiningIcon />,
  },
  {
    name: "Farm Eggs (6pk)",
    category: "Dairy • 64 units",
    amount: "₹2,560",
    icon: <EggIcon />,
  },
  {
    name: "Britannia Biscuits",
    category: "Snacks • 50 units",
    amount: "₹1,250",
    icon: <CookieIcon />,
  },
];

const TopSelling = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "#C2C6D6",
        borderRadius: "12px",
        boxShadow: "none",
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          padding: "20px 24px",
          "&:last-child": {
            paddingBottom: "20px",
          },
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#191C1D",
            }}
          >
            Top Selling
          </Typography>

          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>

        {/* PRODUCTS */}
        {products.map((product, index) => (
          <Box
            key={product.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderRadius: "8px",

              borderBottom:
                index !== products.length - 1
                  ? "1px solid #E1E3E8"
                  : "none",

              "&:hover": {
                backgroundColor: "#F8F9FA",
              },
            }}
          >
            {/* LEFT */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minWidth: 0,
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "6px",
                  backgroundColor: "#DCEBFA",
                  color: "#0058BE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,

                  "& svg": {
                    fontSize: "21px",
                  },
                }}
              >
                {product.icon}
              </Box>

              {/* TEXT */}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#191C1D",
                  }}
                >
                  {product.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#424754",
                    marginTop: "2px",
                  }}
                >
                  {product.category}
                </Typography>
              </Box>
            </Box>

            {/* AMOUNT */}
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#191C1D",
                marginLeft: "12px",
                whiteSpace: "nowrap",
              }}
            >
              {product.amount}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopSelling;