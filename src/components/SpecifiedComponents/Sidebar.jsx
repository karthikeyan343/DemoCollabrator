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

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "190px",
        height: "100vh",
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        justifyContent:'space-between'
      }}
    >
<Box
  sx={{
    height: "58px",
    display: "flex",
    alignItems: "center",
    p: 1.3,
    borderBottom: "1px solid #e0e0e0",
  }}
>
  <Box
    component="img"
    src=""
    alt="logo"
    sx={{
      width: "30px",
      height: "33px",
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
        color: "Blue",
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
      <List
        sx={{
          px: 1,
          pt: 1,
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
      <Box sx={{ mt: "auto" }}>
        <Box
          sx={{
            borderTop: "1px solid #e0e0e0",
            px:1,
            py: 1,
            mt:35
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
    </Box>
  );
};

export default Sidebar;
