import React from "react";
import { Box, Grid } from "@mui/material";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import MetricCard from "./MetricCard";
import SalesTrends from "./SalesTrends";
import TopSelling from "./TopSelling";
import RecentTransactions from "./RecentTransactions";

import {
  PaymentsOutlined,
  ReceiptOutlined,
  PersonAddOutlined,
  WarningAmberOutlined,
  TrendingUp,
  Remove,
  ArrowForward,
} from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* SIDEBAR */}
      <DashboardSidebar />

      {/* HEADER */}
      <DashboardHeader />

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          marginLeft: "256px",
          padding: "96px 32px 32px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        {/* PAGE HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 4,
          }}
        >
          <Box>
            <Box
              component="h2"
              sx={{
                margin: 0,
                marginBottom: "4px",
                fontSize: "28px",
                fontWeight: 700,
                color: "#191C1D",
              }}
            >
              Dashboard Overview
            </Box>

            <Box
              component="p"
              sx={{
                margin: 0,
                fontSize: "14px",
                color: "#424754",
              }}
            >
              Here's what's happening at Terminal #01 today.
            </Box>
          </Box>

          {/* ACTION BUTTONS */}
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
            }}
          >
            <Box
              component="button"
              sx={{
                minHeight: "48px",
                padding: "0 16px",

                border: "1px solid #C2C6D6",
                borderRadius: "8px",

                backgroundColor: "#FFFFFF",
                color: "#191C1D",

                fontWeight: 600,

                cursor: "pointer",

                transition: "all 0.2s ease",

                "&:hover": {
                  borderColor: "#0058BE",
                  color: "#0058BE",
                  backgroundColor: "#F8FBFF",
                },
              }}
            >
              Generate Report
            </Box>

            <Box
              component="button"
              sx={{
                minHeight: "48px",
                padding: "0 16px",

                border: "1px solid #C2C6D6",
                borderRadius: "8px",

                backgroundColor: "#FFFFFF",
                color: "#191C1D",

                fontWeight: 600,

                cursor: "pointer",

                transition: "all 0.2s ease",

                "&:hover": {
                  borderColor: "#0058BE",
                  color: "#0058BE",
                  backgroundColor: "#F8FBFF",
                },
              }}
            >
              Add Product
            </Box>
          </Box>
        </Box>

        {/* ============================= */}
        {/* METRIC CARDS */}
        {/* ============================= */}

        <Grid
          container
          spacing={2}
          sx={{
            mb: 3,
          }}
        >
          {/* TODAY'S SALES */}
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Today's Sales"
              value="₹12,450"
              subtitle="+14.5% vs yesterday"
              subtitleIcon={
                <TrendingUp
                  sx={{
                    fontSize: 15,
                  }}
                />
              }
              icon={
                <PaymentsOutlined
                  sx={{
                    fontSize: 22,
                  }}
                />
              }
              state="success"
              bgDecoration="#0058BE"
            />
          </Grid>

          {/* TOTAL TRANSACTIONS */}
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Total Transactions"
              value="48"
              subtitle="+3 from last hour"
              subtitleIcon={
                <TrendingUp
                  sx={{
                    fontSize: 15,
                  }}
                />
              }
              icon={
                <ReceiptOutlined
                  sx={{
                    fontSize: 22,
                  }}
                />
              }
              state="success"
              bgDecoration="#0058BE"
            />
          </Grid>

          {/* NEW CUSTOMERS */}
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="New Customers"
              value="5"
              subtitle="Same as usual"
              subtitleIcon={
                <Remove
                  sx={{
                    fontSize: 15,
                  }}
                />
              }
              icon={
                <PersonAddOutlined
                  sx={{
                    fontSize: 22,
                  }}
                />
              }
              state="neutral"
              bgDecoration="#0058BE"
            />
          </Grid>

          {/* LOW STOCK ALERTS */}
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Low Stock Alerts"
              value="12"
              subtitle="Low stock • 12 items"
              subtitleIcon={
                <ArrowForward
                  sx={{
                    fontSize: 15,
                  }}
                />
              }
              icon={
                <WarningAmberOutlined
                  sx={{
                    fontSize: 22,
                  }}
                />
              }
              state="error"
              bgDecoration="#BA1A1A"
            />
          </Grid>
        </Grid>

        {/* ============================= */}
        {/* SALES + TOP SELLING */}
        {/* ============================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "2fr 1fr",
            },

            gap: 3,

            marginBottom: 3,
          }}
        >
          <SalesTrends />

          <TopSelling />
        </Box>

        {/* ============================= */}
        {/* RECENT TRANSACTIONS */}
        {/* ============================= */}

        <RecentTransactions />
      </Box>
    </Box>
  );
};

export default Dashboard;