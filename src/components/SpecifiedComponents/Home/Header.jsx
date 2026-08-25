import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WifiIcon from "@mui/icons-material/Wifi";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Header = () => {
  return (
    <Box
      sx={{
        height: "58px",
        display: "flex",
        alignItems: "center",
        justifyContent:'space-between',
        borderBottom: "1px solid #e0e0e0",
     
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: 'black',
          }}
        >
          RetailPOS Pro
        </Typography> 
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5 }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            color: "#555",
          }}
        >
          INV-2024-001425
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box
            sx={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#2e7d32",
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#2e7d32",
            }}
          >
            Online
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          ml: "auto",
        }}
      >
        <NotificationsNoneIcon
          sx={{ fontSize: "20px" }}
        />

        <WifiIcon
          sx={{ fontSize: "20px" }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <AccessTimeIcon sx={{ fontSize: "17px" }} />

          <Typography
            sx={{
              fontSize: "14px",
              color: "#555",
            }}
          >
            10:32 AM
          </Typography>
        </Box>

        <Avatar
          sx={{
            width: "30px",
            height: "30px",
            fontSize: "16px",
          }}
        >
          C
        </Avatar>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Cashier1
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;