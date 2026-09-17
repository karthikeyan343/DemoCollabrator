import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import StorefrontIcon from "@mui/icons-material/Storefront";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InventoryIcon from "@mui/icons-material/Inventory";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "190px",
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #d7dbe5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "86px",
          px: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          borderBottom: "1px solid #e0e3e8",
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "7px",
            backgroundColor: "#1769d1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            flexShrink: 0,
          }}
        >
          <StorefrontIcon sx={{ fontSize: 20 }} />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "#0058be",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            Kinetic Retail
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              color: "#424754",
              mt: 0.3,
            }}
          >
            Terminal #01
          </Typography>
        </Box>
      </Box>
      <Box sx={{ px: 1.25, pt: 2.5, pb: 2 }}>
        <ListItemButton
          sx={{
            height: "38px",
            borderRadius: "7px",
            backgroundColor: "#0058be",
            color: "#ffffff",
            justifyContent: "center",
            gap: 0.5,

            "&:hover": {
              backgroundColor: "#004a9f",
            },

            "& .MuiListItemIcon-root": {
              minWidth: 0,
              color: "#ffffff",
            },

            "& .MuiListItemText-primary": {
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
            },
          }}
        >
          <ListItemIcon>
            <AddIcon sx={{ fontSize: 18 }} />
          </ListItemIcon>

          <ListItemText primary="New Sale" />
        </ListItemButton>
      </Box>

      <List
        sx={{
          px: 1.25,
          pt: 0,
        }}
      >
        <SidebarItem
          icon={<DashboardIcon />}
          text="Dashboard"
        />

        <SidebarItem
          icon={<PointOfSaleIcon />}
          text="POS/Billing"
        />

        <SidebarItem
          icon={<ShoppingBagIcon />}
          text="Products"
        />

        <SidebarItem
          icon={<InventoryIcon />}
          text="Inventory"
        />

        <SidebarItem
          icon={<BarChartIcon />}
          text="Sales"
        />

        <SidebarItem
          icon={<PeopleIcon />}
          text="Customers"
          active
        />
      </List>
    </Box>
  );
};

const SidebarItem = ({ icon, text, active = false }) => {
  return (
    <ListItemButton
      sx={{
        minHeight: "40px",
        mb: 0.5,
        borderRadius: "7px",
        px: 1.2,

        backgroundColor: active
          ? "#dce8fa"
          : "transparent",

        color: active
          ? "#424754"
          : "#596174",

        "&:hover": {
          backgroundColor: active
            ? "#dce8fa"
            : "#f3f4f6",
        },

        "& .MuiListItemIcon-root": {
          minWidth: "27px",
          color: active
            ? "#596174"
            : "#596174",
        },

        "& .MuiListItemText-primary": {
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: active ? 600 : 500,
        },
      }}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>

      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default Sidebar;