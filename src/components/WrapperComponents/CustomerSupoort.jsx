import { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "../../../src/Customer.css";

import Sidebar from "../SpecifiedComponents/CustomerDirectory/CustomerSidebar";
import Header from "../SpecifiedComponents/CustomerDirectory/CustomerHeader";
import CustomerMain from "../SpecifiedComponents/CustomerDirectory/CustomerMain";

const CustomerSupoort = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
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
        backgroundColor: darkMode ? "#191c1d" : "#f8f9fa",
        color: darkMode ? "#ffffff" : "#191c1d",
        transition: "background-color 0.2s ease",
      }}
    >
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
        <Sidebar darkMode={darkMode} />
      </Box>

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
          backgroundColor: darkMode ? "#191c1d" : "#fff",
          borderBottom: darkMode
            ? "1px solid #424754"
            : "1px solid #e1e3e8",
        }}
      >
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
            color: darkMode ? "#ffffff" : "#191c1d",
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
          <Header
            darkMode={darkMode}
            onToggleDarkMode={toggleDarkMode}
          />
        </Box>
      </Box>

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
          backgroundColor: darkMode ? "#191c1d" : "#f8f9fa",
        }}
      >
        <CustomerMain darkMode={darkMode} />
      </Box>

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
            backgroundColor: darkMode ? "#191c1d" : "#fff",
          },
        }}
      >
        <Sidebar darkMode={darkMode} />
      </Drawer>
    </Box>
  );
};

export default CustomerSupoort;