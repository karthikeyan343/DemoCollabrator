import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CustomerRow = ({ customer, columns }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: columns,
        alignItems: "center",
        minHeight: { xs: 64, sm: 68 },
        px: { xs: 1.25, sm: 2 },
        gap: { xs: 0.5, sm: 1 },
        boxSizing: "border-box",
        borderBottom: "1px solid #e1e3e8",
        backgroundColor: customer.selected ? "#f8faff" : "#fff",
        "&:hover": {
          backgroundColor: "#f8f9fa",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.75, sm: 1.25 },
          minWidth: 0,
        }}
      >
        <Avatar
          sx={{
            width: { xs: 30, sm: 36 },
            height: { xs: 30, sm: 36 },
            flexShrink: 0,
            backgroundColor: customer.selected ? "#2170e4" : "#e7e9ed",
            color: customer.selected ? "#fff" : "#424754",
            fontSize: { xs: 10, sm: 11 },
            fontWeight: 600,
          }}
        >
          {customer.initials ||
            customer.name?.slice(0, 2).toUpperCase()}
        </Avatar>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: { xs: 11, sm: 13 },
              lineHeight: "18px",
              fontWeight: 600,
              color: "#191c1d",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {customer.name}
          </Typography>

          <Typography
            sx={{
              mt: "1px",
              fontSize: { xs: 9, sm: 10 },
              lineHeight: "14px",
              color: "#727785",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {customer.type}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: { xs: 10, sm: 12 },
          color: "#424754",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {customer.mobile}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 10, sm: 12 },
          fontWeight: 500,
          color: "#191c1d",
          whiteSpace: "nowrap",
        }}
      >
        {Number(customer.loyaltyPoints || 0).toLocaleString()}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 10, sm: 12 },
          color: "#424754",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {customer.lastVisit}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 10, sm: 12 },
          fontWeight: 600,
          color: "#191c1d",
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        ₹{Number(customer.totalSpend || 0).toFixed(2)}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MoreVertIcon
          sx={{
            fontSize: { xs: 18, sm: 20 },
            color: "#727785",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomerRow;