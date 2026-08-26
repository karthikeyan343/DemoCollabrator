import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import CustomerRow from "./CustomerRow";
import * as XLSX from "xlsx";

const columns = "2.4fr 1.7fr 1.2fr 1.6fr 1.3fr 0.7fr";

const Directory = ({
  searchValue = "",
  customers = [],
  darkMode = false,
}) => {
  const [filter, setFilter] = useState("none");
  const [anchorEl, setAnchorEl] = useState(null);

  const search = searchValue.toLowerCase().trim();

  const filteredCustomers = [...customers]
    .filter(
      (customer) =>
        !search ||
        [
          customer.name,
          customer.mobile,
          customer.email,
        ].some((value) =>
          value?.toLowerCase().includes(search)
        )
    )
    .sort((a, b) => {
      if (filter === "latest") {
        return (
          new Date(b.lastVisitDate) -
          new Date(a.lastVisitDate)
        );
      }

      if (filter === "oldest") {
        return (
          new Date(a.lastVisitDate) -
          new Date(b.lastVisitDate)
        );
      }

      if (filter === "highest") {
        return b.totalSpend - a.totalSpend;
      }

      if (filter === "lowest") {
        return a.totalSpend - b.totalSpend;
      }

      if (filter === "mostPoints") {
        return b.loyaltyPoints - a.loyaltyPoints;
      }

      if (filter === "leastPoints") {
        return a.loyaltyPoints - b.loyaltyPoints;
      }

      return 0;
    });

  const filterName = {
    latest: "Latest Visit",
    oldest: "Oldest Visit",
    highest: "Highest Spend",
    lowest: "Lowest Spend",
    mostPoints: "Most Points",
    leastPoints: "Least Points",
  };

  const exportCustomers = () => {
    const data = filteredCustomers.map((customer) => ({
      Customer: customer.name,
      Type: customer.type,
      "Mobile Number": customer.mobile,
      Email: customer.email,
      "Loyalty Points": customer.loyaltyPoints,
      "Last Visit": customer.lastVisit,
      "Total Spend": customer.totalSpend,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Customers"
    );

    XLSX.writeFile(
      workbook,
      "Kinetic-Retail-Customers.xlsx"
    );
  };

  const backgroundColor = darkMode ? "#24282b" : "#ffffff";
  const headerColor = darkMode ? "#2d3236" : "#f3f4f5";
  const tableHeaderColor = darkMode ? "#24282b" : "#f8f9fa";
  const primaryColor = darkMode ? "#ffffff" : "#191c1d";
  const secondaryColor = darkMode ? "#c2c6d6" : "#424754";
  const mutedColor = darkMode ? "#aeb4c0" : "#727785";
  const borderColor = darkMode ? "#424754" : "#c2c6d6";

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1240,
        mx: "auto",
        bgcolor: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "background-color 0.2s ease",
      }}
    >
      <Box
        sx={{
          minHeight: 64,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          bgcolor: headerColor,
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 600,
              color: primaryColor,
              whiteSpace: "nowrap",
            }}
          >
            Directory
          </Typography>

          {filter !== "none" && (
            <Typography
              sx={{
                fontSize: 11,
                color: "#0058be",
                whiteSpace: "nowrap",
              }}
            >
              {filterName[filter]}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexShrink: 0,
          }}
        >
          <Button
            startIcon={<FilterListIcon />}
            onClick={(event) =>
              setAnchorEl(event.currentTarget)
            }
            sx={{
              height: 40,
              px: 1.5,
              border: `1px solid ${borderColor}`,
              borderRadius: "8px",
              bgcolor: backgroundColor,
              color: secondaryColor,
              textTransform: "none",
              fontSize: 12,
              fontWeight: 600,
              "&:hover": {
                bgcolor: darkMode
                  ? "#353a3f"
                  : "#f3f4f5",
              },
            }}
          >
            Filter
          </Button>

          <Button
            startIcon={<DownloadIcon />}
            onClick={exportCustomers}
            sx={{
              height: 40,
              px: 1.5,
              border: `1px solid ${borderColor}`,
              borderRadius: "8px",
              bgcolor: backgroundColor,
              color: secondaryColor,
              textTransform: "none",
              fontSize: 12,
              fontWeight: 600,
              "&:hover": {
                bgcolor: darkMode
                  ? "#353a3f"
                  : "#f3f4f5",
              },
            }}
          >
            Export
          </Button>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          PaperProps={{
            sx: {
              bgcolor: darkMode
                ? "#24282b"
                : "#ffffff",
              color: primaryColor,
            },
          }}
        >
          <MenuItem
            onClick={() => {
              setFilter("latest");
              setAnchorEl(null);
            }}
          >
            Latest Visit
          </MenuItem>

          <MenuItem
            onClick={() => {
              setFilter("oldest");
              setAnchorEl(null);
            }}
          >
            Oldest Visit
          </MenuItem>

          <MenuItem
            onClick={() => {
              setFilter("highest");
              setAnchorEl(null);
            }}
          >
            Highest Spend
          </MenuItem>

          <MenuItem
            onClick={() => {
              setFilter("lowest");
              setAnchorEl(null);
            }}
          >
            Lowest Spend
          </MenuItem>

          <MenuItem
            onClick={() => {
              setFilter("mostPoints");
              setAnchorEl(null);
            }}
          >
            Most Loyalty Points
          </MenuItem>

          <MenuItem
            onClick={() => {
              setFilter("leastPoints");
              setAnchorEl(null);
            }}
          >
            Least Loyalty Points
          </MenuItem>

          <MenuItem
            onClick={() => {
              setFilter("none");
              setAnchorEl(null);
            }}
          >
            Clear Filter
          </MenuItem>
        </Menu>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: columns,
          alignItems: "center",
          minHeight: 56,
          px: 2,
          bgcolor: tableHeaderColor,
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        {[
          "Customer",
          "Mobile Number",
          "Loyalty Pts",
          "Last Visit",
        ].map((heading) => (
          <TableHeading
            key={heading}
            darkMode={darkMode}
          >
            {heading}
          </TableHeading>
        ))}

        <TableHeading
          align="right"
          darkMode={darkMode}
        >
          Total Spend
        </TableHeading>

        <Box />
      </Box>

      {filteredCustomers.length ? (
        filteredCustomers.map((customer) => (
          <CustomerRow
            key={customer.id}
            customer={customer}
            columns={columns}
            darkMode={darkMode}
          />
        ))
      ) : (
        <Box
          sx={{
            height: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: backgroundColor,
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              color: mutedColor,
            }}
          >
            No customers found
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          minHeight: 64,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: backgroundColor,
          borderTop: `1px solid ${borderColor}`,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            color: mutedColor,
          }}
        >
          Showing 1 to {filteredCustomers.length} of 1,240
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 0.5,
          }}
        >
          <PaginationButton darkMode>
            ‹
          </PaginationButton>

          <PaginationButton
            active
            darkMode={darkMode}
          >
            1
          </PaginationButton>

          <PaginationButton darkMode={darkMode}>
            2
          </PaginationButton>

          <PaginationButton darkMode={darkMode}>
            ›
          </PaginationButton>
        </Box>
      </Box>
    </Box>
  );
};

const TableHeading = ({
  children,
  align = "left",
  darkMode,
}) => (
  <Typography
    sx={{
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em",
      color: darkMode ? "#c2c6d6" : "#424754",
      textAlign: align,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </Typography>
);

const PaginationButton = ({
  children,
  active = false,
  darkMode = false,
}) => (
  <Box
    sx={{
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${
        darkMode ? "#424754" : "#c2c6d6"
      }`,
      borderRadius: "6px",
      fontSize: 14,
      fontWeight: active ? 600 : 400,
      color: active
        ? "#ffffff"
        : darkMode
        ? "#c2c6d6"
        : "#424754",
      bgcolor: active
        ? "#0058be"
        : darkMode
        ? "#24282b"
        : "#ffffff",
      cursor: "pointer",
    }}
  >
    {children}
  </Box>
);

export default Directory;