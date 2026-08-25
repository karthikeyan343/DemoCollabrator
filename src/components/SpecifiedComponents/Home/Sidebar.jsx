import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import logo from "../../../assets/PothysLogo.webp";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "190px",
        height: "100vh",
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          height: "42px",
          display: "flex",
          alignItems: "center",
          p: 1,
       
          borderBottom: "1px solid #e0e0e0",
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: "38px",
            height: "38px",
            objectFit: "contain",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "blue",
              lineHeight: 1.2,
            }}
          >
            RetailPOS Pro
          </Typography>

          <Typography
            sx={{
              fontSize: "10px",
              color: "grey",
            }}
          >
            V2.4.1
          </Typography>
        </Box>
      </Box>

      {/* Main Menu */}
      <List
        sx={{
          px: 1,
          pt: 2,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PointOfSaleIcon />
          </ListItemIcon>

          <ListItemText primary="POS/Billing" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ShoppingBagIcon />
          </ListItemIcon>

          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>

          <ListItemText primary="Inventory" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>

          <ListItemText primary="Sales" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>

          <ListItemText primary="Customers" />
        </ListItemButton>
      </List>

      {/* Bottom Menu */}
      <Box
        sx={{
          mt: "auto",
          borderTop: "1px solid #e0e0e0",
          px: 1,
          py: 1,
          flexShrink: 0,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>

          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;