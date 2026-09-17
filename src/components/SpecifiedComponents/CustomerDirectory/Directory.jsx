import React from "react";
import { Box, Button, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import CustomerRow from "./CustomerRow";
import Customers from "../../../data/CustomerDetails";

const columns = "2.4fr 1.7fr 1.2fr 1.6fr 1.3fr 0.7fr";

const Directory = ({ searchValue = "" }) => {
  const search = searchValue.toLowerCase().trim();

  const filteredCustomers = Customers.filter(
    (customer) =>
      !search ||
      customer.name?.toLowerCase().includes(search) ||
      customer.mobile?.toLowerCase().includes(search) ||
      customer.email?.toLowerCase().includes(search)
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1240,
        mx: "auto",
        backgroundColor: "#fff",
        border: "1px solid #c2c6d6",
        borderRadius: "12px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          height: 64,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f3f4f5",
          borderBottom: "1px solid #c2c6d6",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: "#191c1d",
          }}
        >
          Directory
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ActionButton
            icon={<FilterListIcon />}
            text="Filter"
          />

          <ActionButton
            icon={<DownloadIcon />}
            text="Export"
          />
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: columns,
            alignItems: "center",
            minHeight: 56,
            px: 2,
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #c2c6d6",
            boxSizing: "border-box",
          }}
        >
          <TableHeading>
            Customer
          </TableHeading>

          <TableHeading>
            Mobile Number
          </TableHeading>

          <TableHeading>
            Loyalty Pts
          </TableHeading>

          <TableHeading>
            Last Visit
          </TableHeading>

          <TableHeading align="right">
            Total Spend
          </TableHeading>

          <Box />
        </Box>

        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer) => (
            <CustomerRow
              key={customer.id}
              customer={customer}
              columns={columns}
            />
          ))
        ) : (
          <Box
            sx={{
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 15,
                color: "#727785",
              }}
            >
              No customers found
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          height: 64,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #c2c6d6",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            color: "#727785",
            whiteSpace: "nowrap",
          }}
        >
          Showing 1 to {filteredCustomers.length} of 1,240
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <PaginationButton>
            ‹
          </PaginationButton>

          <PaginationButton active>
            1
          </PaginationButton>

          <PaginationButton>
            2
          </PaginationButton>

          <PaginationButton>
            ›
          </PaginationButton>
        </Box>
      </Box>
    </Box>
  );
};

const ActionButton = ({ icon, text }) => (
  <Button
    startIcon={icon}
    sx={{
      height: 40,
      px: 1.5,
      border: "1px solid #c2c6d6",
      borderRadius: "8px",
      backgroundColor: "#fff",
      color: "#424754",
      textTransform: "none",
      fontSize: 12,
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#f8f9fa",
      },
    }}
  >
    {text}
  </Button>
);

const TableHeading = ({ children, align = "left" }) => (
  <Typography
    sx={{
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 600,
      letterSpacing: "0.04em",
      color: "#424754",
      textAlign: align,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {children}
  </Typography>
);

const PaginationButton = ({ children, active = false }) => (
  <Box
    sx={{
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #c2c6d6",
      borderRadius: "6px",
      fontSize: 14,
      fontWeight: active ? 600 : 400,
      color: active ? "#fff" : "#424754",
      backgroundColor: active ? "#0058be" : "#fff",
      cursor: "pointer",
      boxSizing: "border-box",
    }}
  >
    {children}
  </Box>
);

export default Directory;