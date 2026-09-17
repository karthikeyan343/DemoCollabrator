import React, { useState } from "react";

import {
  Box,
  IconButton,
  Drawer,
  GlobalStyles,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import DashboardSidebar from "../SpecifiedComponents/DashBoardComponents/DashboardSidebar";
import DashboardHeader from "../SpecifiedComponents/DashBoardComponents/DashboardHeader";
import MetricCard from "../SpecifiedComponents/DashBoardComponents/MetricCard";
import SalesTrends from "../SpecifiedComponents/DashBoardComponents/SalesTrends";
import TopSelling from "../SpecifiedComponents/DashBoardComponents/TopSelling";
import RecentTransactions from "../SpecifiedComponents/DashBoardComponents/RecentTransactions";

const DashboardSupport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F8F9FA",

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "256px minmax(0, 1fr)",
        },

        gridTemplateRows: {
          xs: "64px minmax(0, 1fr)",
          md: "64px minmax(0, 1fr)",
        },
      }}
    >
      <GlobalStyles
        styles={{
          "html, body": {
            scrollbarWidth: "none",
            caretColor: "transparent",
          },

          "html::-webkit-scrollbar, body::-webkit-scrollbar": {
            display: "none",
          },

          "*": {
            scrollbarWidth: "none",
          },

          "*::-webkit-scrollbar": {
            display: "none",
          },

          "button, a, p, h1, h2, h3, h4, h5, h6, span, div": {
            caretColor: "transparent",
          },

          "input, textarea": {
            caretColor: "auto",
          },
        }}
      />

      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },

          gridColumn: "1",
          gridRow: "1 / 3",

          minWidth: 0,
          minHeight: 0,

          overflow: "hidden",
        }}
      >
        <DashboardSidebar />
      </Box>

      <Box
        sx={{
          gridColumn: {
            xs: "1",
            md: "2",
          },

          gridRow: "1",

          minWidth: 0,

          width: "100%",
          height: "64px",

          display: "flex",
          alignItems: "center",

          backgroundColor: "#FFFFFF",

          borderBottom: "1px solid #C2C6D6",

          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={openSidebar}
          aria-label="Open navigation"
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },

            width: 42,
            height: 42,

            marginLeft: 1,

            color: "#191C1D",

            flexShrink: 0,

            "&:hover": {
              color: "#0058BE",
              backgroundColor: "#E3F0FF",
            },
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
          <DashboardHeader />
        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          gridColumn: {
            xs: "1",
            md: "2",
          },

          gridRow: "2",

          minWidth: 0,
          minHeight: 0,

          width: "100%",
          height: "100%",

          overflow: "auto",

          backgroundColor: "#F8F9FA",

          padding: {
            xs: "24px 16px",
            sm: "24px",
            md: "32px",
          },

          boxSizing: "border-box",

          "&::-webkit-scrollbar": {
            display: "none",
          },

          scrollbarWidth: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",

            flexDirection: {
              xs: "column",
              sm: "row",
            },

            justifyContent: "space-between",

            alignItems: {
              xs: "flex-start",
              sm: "flex-end",
            },

            gap: 2,

            marginBottom: 4,
          }}
        >
          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Box
              component="h2"
              sx={{
                margin: 0,

                fontSize: {
                  xs: "22px",
                  sm: "26px",
                  md: "28px",
                },

                lineHeight: 1.2,

                fontWeight: 700,

                color: "#191C1D",
              }}
            >
              Dashboard Overview
            </Box>

            <Box
              component="p"
              sx={{
                margin: "6px 0 0",

                fontSize: {
                  xs: "13px",
                  sm: "14px",
                },

                lineHeight: 1.5,

                color: "#424754",
              }}
            >
              Here's what's happening at Terminal #01 today.
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",

              gap: 1,

              width: {
                xs: "100%",
                sm: "auto",
              },

              flexShrink: 0,
            }}
          >
            <Box
              component="button"
              sx={{
                flex: {
                  xs: 1,
                  sm: "initial",
                },

                minHeight: "48px",

                padding: "0 16px",

                border: "1px solid #C2C6D6",

                borderRadius: "8px",

                backgroundColor: "#FFFFFF",

                color: "#191C1D",

                fontSize: "14px",

                fontWeight: 600,

                cursor: "pointer",

                whiteSpace: "nowrap",

                transition: "all 0.2s ease",

                "&:hover": {
                  backgroundColor: "#F3F7FC",
                  borderColor: "#0058BE",
                  color: "#0058BE",
                },
              }}
            >
              Generate Report
            </Box>

            <Box
              component="button"
              sx={{
                flex: {
                  xs: 1,
                  sm: "initial",
                },

                minHeight: "48px",

                padding: "0 16px",

                border: "1px solid #C2C6D6",

                borderRadius: "8px",

                backgroundColor: "#FFFFFF",

                color: "#191C1D",

                fontSize: "14px",

                fontWeight: 600,

                cursor: "pointer",

                whiteSpace: "nowrap",

                transition: "all 0.2s ease",

                "&:hover": {
                  backgroundColor: "#F3F7FC",
                  borderColor: "#0058BE",
                  color: "#0058BE",
                },
              }}
            >
              Add Product
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },

            gap: 3,

            marginBottom: 3,
          }}
        >
          <MetricCard
            title="Today's Sales"
            value="₹12,450"
            subtitle="+14.5% vs yesterday"
            subtitleIcon={
              <TrendingUpIcon
                sx={{
                  color: "#00855B",
                  fontSize: "15px",
                }}
              />
            }
            icon={
              <PaymentsOutlinedIcon
                sx={{
                  color: "#0058BE",
                  fontSize: "22px",
                }}
              />
            }
            state="success"
            bgDecoration="#0058BE"
          />

          <MetricCard
            title="Total Transactions"
            value="48"
            subtitle="+3 from last hour"
            subtitleIcon={
              <TrendingUpIcon
                sx={{
                  color: "#00855B",
                  fontSize: "15px",
                }}
              />
            }
            icon={
              <ReceiptOutlinedIcon
                sx={{
                  color: "#0058BE",
                  fontSize: "22px",
                }}
              />
            }
            state="success"
            bgDecoration="#0058BE"
          />

          <MetricCard
            title="New Customers"
            value="5"
            subtitle="Same as usual"
            subtitleIcon={
              <RemoveIcon
                sx={{
                  color: "#73777F",
                  fontSize: "15px",
                }}
              />
            }
            icon={
              <PersonAddOutlinedIcon
                sx={{
                  color: "#0058BE",
                  fontSize: "22px",
                }}
              />
            }
            state="neutral"
            bgDecoration="#0058BE"
          />

          <MetricCard
            title="Low Stock Alerts"
            value="12"
            subtitle="Low stock • 12 items"
            subtitleIcon={
              <ArrowForwardIcon
                sx={{
                  color: "#BA1A1A",
                  fontSize: "15px",
                }}
              />
            }
            icon={
              <WarningAmberOutlinedIcon
                sx={{
                  color: "#BA1A1A",
                  fontSize: "22px",
                }}
              />
            }
            state="error"
            bgDecoration="#BA1A1A"
          />
        </Box>

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 2fr) minmax(280px, 1fr)",
            },

            gap: 3,

            marginBottom: 3,
          }}
        >
          <SalesTrends />

          <TopSelling />
        </Box>

        <RecentTransactions />
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
            md: "none",
          },

          "& .MuiDrawer-paper": {
            width: {
              xs: 240,
              sm: 256,
            },

            boxSizing: "border-box",

            border: "none",

            backgroundColor: "#FFFFFF",

            overflow: "hidden",
          },
        }}
      >
        <DashboardSidebar />
      </Drawer>
    </Box>
  );
};

export default DashboardSupport;