import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import StorefrontIcon from "@mui/icons-material/Storefront";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PaymentsIcon from "@mui/icons-material/Payments";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const DashboardSidebar = () => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      label: "POS/Billing",
      icon: <PointOfSaleIcon />,
    },
    {
      label: "Products",
      icon: <Inventory2Icon />,
    },
    {
      label: "Inventory",
      icon: <WarehouseIcon />,
    },
    {
      label: "Sales",
      icon: <PaymentsIcon />,
    },
    {
      label: "Customers",
      icon: <GroupIcon />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        borderRight: "1px solid #C2C6D6",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* BRAND */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          padding: "8px",
          marginBottom: 3,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#E3F0FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <StorefrontIcon
            sx={{
              color: "#0058BE",
            }}
          />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0058BE",
              whiteSpace: "nowrap",
            }}
          >
            Kinetic Retail
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#424754",
            }}
          >
            Terminal #01
          </Typography>
        </Box>
      </Box>

      {/* MENU */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={item.label}
            sx={{
              minHeight: "48px",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              padding: "0 16px",
              borderRadius: "8px",
              cursor: "pointer",

              backgroundColor:
                index === 0
                  ? "#D6E0F3"
                  : "transparent",

              color:
                index === 0
                  ? "#0058BE"
                  : "#555F6F",

              fontWeight:
                index === 0
                  ? 700
                  : 500,

              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "#E7E8E9",
                color: "#0058BE",
              },
            }}
          >
            {item.icon}

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "inherit",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        startIcon={<AddCircleIcon />}
        variant="contained"
        sx={{
          marginTop: "auto",
          minHeight: "48px",
          backgroundColor: "#0058BE",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,

          "&:hover": {
            backgroundColor: "#004A9F",
          },
        }}
      >
        New Sale
      </Button>
    </Box>
  );
};

export default DashboardSidebar;