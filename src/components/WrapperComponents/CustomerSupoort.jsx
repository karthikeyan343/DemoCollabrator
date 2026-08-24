import { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "../../components/WrapperComponents/Customer.css";

import Sidebar from "../SpecifiedComponents/CustomerDirectory/CustomerSidebar";
import Header from "../SpecifiedComponents/CustomerDirectory/CustomerHeader";
import CustomerMain from "../SpecifiedComponents/CustomerDirectory/CustomerMain";

const CustomerSupoort = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Box
      className="customer-page"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "190px minmax(0, 1fr)",
        },
        gridTemplateRows: "58px minmax(0, 1fr)",
        width: "100%",
        height: "100vh",
        minHeight: 0,
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
          gridColumn: "1",
          gridRow: "1 / 3",
          minWidth: 0,
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        <Sidebar />
      </Box>

      {/* Header */}
      <Box
        sx={{
          gridColumn: {
            xs: "1",
            sm: "1",
            md: "2",
          },
          gridRow: "1",
          minWidth: 0,
          width: "100%",
          height: "58px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#fff",
          borderBottom: "1px solid #e1e3e8",
        }}
      >
        {/* Mobile / Tablet Menu */}
        <IconButton
          onClick={openSidebar}
          aria-label="Open navigation"
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
            },
            width: 42,
            height: 42,
            ml: 1,
            mr: 0.5,
            color: "#191c1d",
            flexShrink: 0,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Header />
        </Box>
      </Box>

      {/* Customer Main */}
      <Box
        sx={{
          gridColumn: {
            xs: "1",
            sm: "1",
            md: "2",
          },
          gridRow: "2",
          minWidth: 0,
          minHeight: 0,
          width: "100%",
          height: "100%",
          overflow: "auto",
          backgroundColor: "#f8f9fa",
        }}
      >
        <CustomerMain />
      </Box>

      {/* Mobile / Tablet Sidebar */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={closeSidebar}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
          "& .MuiDrawer-paper": {
            width: {
              xs: 190,
              sm: 190,
            },
            boxSizing: "border-box",
            border: "none",
            overflow: "hidden",
            backgroundColor: "#fff",
          },
        }}
      >
        <Sidebar />
      </Drawer>
    </Box>
  );
};

export default CustomerSupoort;