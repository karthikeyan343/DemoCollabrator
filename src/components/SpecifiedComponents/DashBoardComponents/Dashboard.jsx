import React, { useState } from "react";
import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import MetricCard from "./MetricCard";
import SalesTrends from "./SalesTrends";
import TopSelling from "./TopSelling";
import RecentTransactions from "./RecentTransactions";

import DashboardProduct from "../../../data/DashboardProduct";

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
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState(DashboardProduct);

  const [openAddProduct, setOpenAddProduct] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const filteredProducts = products.filter((product) => {
    const search = searchValue.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.price.toLowerCase().includes(search)
    );
  });

  const handleAddProduct = () => {
    if (
      !newProduct.name.trim() ||
      !newProduct.category.trim() ||
      !newProduct.price.trim() ||
      !newProduct.stock.trim()
    ) {
      return;
    }

    const product = {
      id: Date.now(),
      name: newProduct.name.trim(),
      category: newProduct.category.trim(),
      price: newProduct.price.trim().startsWith("₹")
        ? newProduct.price.trim()
        : `₹${newProduct.price.trim()}`,
      stock: Number(newProduct.stock),
    };

    setProducts((previousProducts) => [...previousProducts, product]);

    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
    });

    setOpenAddProduct(false);
  };

  const handleCloseAddProduct = () => {
    setOpenAddProduct(false);

    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <DashboardSidebar />

      <DashboardHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <Box
        component="main"
        sx={{
          marginLeft: "256px",
          padding: "96px 32px 32px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
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
              onClick={() => setOpenAddProduct(true)}
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

        <Grid
          container
          spacing={2}
          sx={{
            mb: 3,
          }}
        >
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

          <TopSelling
            products={products}
            filteredProducts={filteredProducts}
            isSearching={searchValue.trim().length > 0}
          />
        </Box>

        <RecentTransactions searchValue={searchValue} />
      </Box>

      <Dialog
        open={openAddProduct}
        onClose={handleCloseAddProduct}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            color: "#191C1D",
          }}
        >
          Add Product
        </DialogTitle>

        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              paddingTop: "8px",
            }}
          >
            <TextField
              label="Product Name"
              value={newProduct.name}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  name: event.target.value,
                })
              }
              fullWidth
            />

            <TextField
              label="Category"
              value={newProduct.category}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  category: event.target.value,
                })
              }
              fullWidth
            />

            <TextField
              label="Price"
              value={newProduct.price}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  price: event.target.value,
                })
              }
              fullWidth
            />

            <TextField
              label="Stock"
              type="number"
              value={newProduct.stock}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  stock: event.target.value,
                })
              }
              fullWidth
            />
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            padding: "16px 24px",
          }}
        >
          <Button
            onClick={handleCloseAddProduct}
            sx={{
              textTransform: "none",
              color: "#424754",
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleAddProduct}
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#0058BE",
              "&:hover": {
                backgroundColor: "#004A9F",
              },
            }}
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;