import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <Box
      sx={{
        height: 58,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#fff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#191c1d" }}>
          Kinetic POS
        </Typography>

        <Typography sx={{ fontSize: 14, color: "#424754" }}>
          Open
        </Typography>

        <Typography
          sx={{
            height: 58,
            display: "flex",
            alignItems: "center",
            color: "#0058be",
            fontSize: 14,
            fontWeight: 600,
            borderBottom: "2px solid #0058be",
          }}
        >
          INV-2024-001
        </Typography>

        <Typography sx={{ fontSize: 13, color: "#727785" }}>
          10:32 AM
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: "#2e7d32",
            }}
          />

          <Typography sx={{ fontSize: 12, color: "#2e7d32" }}>
            Online
          </Typography>
        </Box>

        <NotificationsNoneIcon sx={{ fontSize: 21, color: "#555f6f" }} />

        <Divider orientation="vertical" sx={{ height: 24 }} />

        <Avatar
          src="https://i.pravatar.cc/300"
          alt="Cashier 1"
          sx={{
            width: 32,
            height: 32,
            border: "1px solid #c2c6d6",
          }}
        >
          C
        </Avatar>

        <Typography sx={{ fontSize: 14, color: "#191c1d" }}>
          Cashier 1
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;