import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const DashboardHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 58,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: {
          xs: 1,
          sm: 2,
          md: 3,
        },
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
 <TextField
        placeholder="Search products, orders..."
        size="small"
        sx={{
          width: {
            xs: 150,
            sm: 220,
            md: 300,
            lg: 400,
          },

          flexShrink: 1,

          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            minHeight: 44,
            backgroundColor: "#FFFFFF",
          },

          "& .MuiOutlinedInput-root:hover fieldset": {
            borderColor: "#0058BE",
          },

          "& .MuiOutlinedInput-root.Mui-focused fieldset": {
            borderColor: "#0058BE",
            borderWidth: "2px",
          },

          "& .MuiInputBase-input": {
            fontSize: {
              xs: 12,
              sm: 13,
              md: 14,
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: "#424754",
                  fontSize: 20,
                }}
              />
            </InputAdornment>
          ),
        }}
      />
 <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: {
            xs: 0.5,
            sm: 1,
            md: 2,
          },
          flexShrink: 0,
        }}
      > <Box
          sx={{
            height: "100%",
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
            color: "#424754",
            fontSize: 14,
            fontWeight: 500,
            borderBottom: "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",

            "&:hover": {
              color: "#0058BE",
              fontWeight: 600,
              borderBottom: "2px solid #0058BE",
            },
          }}
        >
          Open
        </Box>
        <Box
          sx={{
            height: "100%",
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
            color: "#424754",
            fontSize: 13,
            borderBottom: "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",

            "&:hover": {
              color: "#0058BE",
              fontWeight: 600,
              borderBottom: "2px solid #0058BE",
            },
          }}
        >
          INV-2024-001
        </Box>        <Box
          sx={{
            height: "100%",
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            color: "#424754",
            fontSize: 13,
            borderBottom: "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",

            "&:hover": {
              color: "#0058BE",
              borderBottom: "2px solid #0058BE",
            },
          }}
        >
          10:45 AM
        </Box>

 <IconButton
          sx={{
            color: "#424754",

            "&:hover": {
              color: "#0058BE",
              backgroundColor: "#E3F0FF",
            },
          }}
        >
          <NotificationsIcon />
        </IconButton>

      <IconButton
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },

            color: "#424754",

            "&:hover": {
              color: "#0058BE",
              backgroundColor: "#E3F0FF",
            },
          }}
        >
          <SettingsIcon />
        </IconButton>

    <IconButton
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },

            color: "#424754",

            "&:hover": {
              color: "#0058BE",
              backgroundColor: "#E3F0FF",
            },
          }}
        >
          <LogoutIcon />
        </IconButton>

      <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },

            alignItems: "center",
            gap: 1,

            border: "1px solid #C2C6D6",
            borderRadius: "30px",

            padding: "4px 14px 4px 4px",

            cursor: "pointer",

            transition: "all 0.2s ease",

            "&:hover": {
              borderColor: "#0058BE",
              backgroundColor: "#F8FBFF",
            },
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/300"
            alt="Cashier John"
            sx={{
              width: 32,
              height: 32,
              border: "1px solid #C2C6D6",
              backgroundColor: "#DCEBFA",
              color: "#0058BE",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            CJ
          </Avatar>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Cashier John
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHeader;