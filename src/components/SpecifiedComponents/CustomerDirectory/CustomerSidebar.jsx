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

const Sidebar = ({ darkMode }) => {
  const backgroundColor = darkMode ? "#191c1d" : "#ffffff";
  const primaryColor = darkMode ? "#ffffff" : "#0058be";
  const secondaryColor = darkMode ? "#c2c6d6" : "#424754";
  const iconColor = darkMode ? "#c2c6d6" : "#596174";
  const borderColor = darkMode ? "#424754" : "#d7dbe5";

  return (
    <Box
      sx={{
        width: "190px",
        height: "100vh",
        backgroundColor,
        borderRight: `1px solid ${borderColor}`,
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.2s ease",
      }}
    >
      <Box
        sx={{
          height: "86px",
          px: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          borderBottom: `1px solid ${borderColor}`,
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
              color: primaryColor,
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
              color: secondaryColor,
              mt: 0.3,
            }}
          >
            Terminal #01
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          px: 1.25,
          pt: 2.5,
          pb: 2,
        }}
      >
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
          darkMode={darkMode}
        />

        <SidebarItem
          icon={<PointOfSaleIcon />}
          text="POS/Billing"
          darkMode={darkMode}
        />

        <SidebarItem
          icon={<ShoppingBagIcon />}
          text="Products"
          darkMode={darkMode}
        />

        <SidebarItem
          icon={<InventoryIcon />}
          text="Inventory"
          darkMode={darkMode}
        />

        <SidebarItem
          icon={<BarChartIcon />}
          text="Sales"
          darkMode={darkMode}
        />

        <SidebarItem
          icon={<PeopleIcon />}
          text="Customers"
          active
          darkMode={darkMode}
        />
      </List>
    </Box>
  );
};

const SidebarItem = ({
  icon,
  text,
  active = false,
  darkMode,
}) => {
  return (
    <ListItemButton
      sx={{
        minHeight: "40px",
        mb: 0.5,
        borderRadius: "7px",
        px: 1.2,

        backgroundColor: active
          ? darkMode
            ? "#293b52"
            : "#dce8fa"
          : "transparent",

        color: darkMode
          ? "#c2c6d6"
          : active
          ? "#424754"
          : "#596174",

        "&:hover": {
          backgroundColor: active
            ? darkMode
              ? "#293b52"
              : "#dce8fa"
            : darkMode
            ? "#24282b"
            : "#f3f4f6",
        },

        "& .MuiListItemIcon-root": {
          minWidth: "27px",
          color: darkMode ? "#c2c6d6" : "#596174",
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