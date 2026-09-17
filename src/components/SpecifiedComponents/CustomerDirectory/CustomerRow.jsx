import React, { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CustomerRow = ({
  customer,
  columns,
  onRemove,
  darkMode = false,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const text = darkMode ? "#fff" : "#191c1d";
  const secondary = darkMode ? "#c2c6d6" : "#424754";
  const muted = darkMode ? "#aeb4c0" : "#727785";
  const border = darkMode ? "#424754" : "#e1e3e8";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: columns,
        alignItems: "center",
        minHeight: 68,
        px: 2,
        gap: 1,
        borderBottom: `1px solid ${border}`,
        bgcolor: darkMode ? "#24282b" : "#fff",
        "&:hover": {
          bgcolor: darkMode ? "#2d3236" : "#f8f9fa",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: darkMode ? "#424754" : "#e7e9ed",
            color: darkMode ? "#fff" : "#424754",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {customer.initials ||
            customer.name?.slice(0, 2).toUpperCase()}
        </Avatar>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              color: text,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {customer.name}
          </Typography>

          <Typography sx={{ fontSize: 10, color: muted }}>
            {customer.type}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: 12,
          color: secondary,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {customer.mobile}
      </Typography>

      <Typography sx={{ fontSize: 12, color: text }}>
        {Number(customer.loyaltyPoints || 0).toLocaleString()}
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          color: secondary,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {customer.lastVisit}
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 600,
          color: text,
          textAlign: "right",
        }}
      >
        ₹{Number(customer.totalSpend || 0).toFixed(2)}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          size="small"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          sx={{ color: muted }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onRemove(customer.id);
            }}
            sx={{ color: "#d32f2f", fontSize: 14 }}
          >
            Remove
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default CustomerRow;