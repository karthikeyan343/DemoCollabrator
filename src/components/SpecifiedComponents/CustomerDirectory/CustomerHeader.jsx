import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ darkMode, onToggleDarkMode }) => {
  const [settingsAnchor, setSettingsAnchor] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [exitOpen, setExitOpen] = useState(false);

  const backgroundColor = darkMode ? "#191c1d" : "#ffffff";
  const primaryColor = darkMode ? "#ffffff" : "#191c1d";
  const secondaryColor = darkMode ? "#c2c6d6" : "#424754";
  const iconColor = darkMode ? "#d7dbe5" : "#555f6f";
  const borderColor = darkMode ? "#424754" : "#e0e0e0";

  const openSettings = (event) => {
    setSettingsAnchor(event.currentTarget);
  };

  const closeSettings = () => {
    setSettingsAnchor(null);
  };

  const openNotifications = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const closeNotifications = () => {
    setNotificationAnchor(null);
  };

  const handleThemeChange = () => {
    onToggleDarkMode();
    closeSettings();
  };

  return (
    <>
      <Box
        sx={{
          height: 58,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: backgroundColor,
          borderBottom: `1px solid ${borderColor}`,
          transition: "background-color 0.2s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 700,
              color: primaryColor,
            }}
          >
            Kinetic POS
          </Typography>

          <Typography
               sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            color: "#424754",
            fontSize: 13,
            borderBottom: "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s ease",

            "&:hover": {
              color: "#0058BE",
              borderBottom: "2px solid #0058BE",
            },
          }}
          >
            Open
          </Typography>

          <Typography
               sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            color: "#424754",
            fontSize: 13,
            borderBottom: "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s ease",

            "&:hover": {
              color: "#0058BE",
              borderBottom: "2px solid #0058BE",
            },
          }}
          >
            INV-2024-001
          </Typography>

        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            color: "#424754",
            fontSize: 13,
            borderBottom: "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s ease",

            "&:hover": {
              color: "#0058BE",
              borderBottom: "2px solid #0058BE",
            },
          }}
        >
          10:45 AM
        </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mr: 0.5,
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: "#2e7d32",
              }}
            />

            <Typography
              sx={{
                fontSize: 12,
                color: "#2e7d32",
              }}
            >
              Online
            </Typography>
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
            color: "#424754",
            "&:hover": {
              color: "#0058BE",
              backgroundColor: "#E3F0FF",
            },
          }}
        >
          <LogoutIcon />
        </IconButton>
          <Divider
            orientation="vertical"
            sx={{
              height: 24,
              borderColor: borderColor,
              mx: 0.5,
            }}
          />

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

          <Typography
            sx={{
              fontSize: 14,
              color: primaryColor,
            }}
          >
            Cashier 1
          </Typography>
        </Box>
      </Box>

      <Menu
        anchorEl={settingsAnchor}
        open={Boolean(settingsAnchor)}
        onClose={closeSettings}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 190,
            bgcolor: darkMode ? "#24282b" : "#ffffff",
          },
        }}
      >
        <MenuItem onClick={handleThemeChange}>
          {darkMode ? (
            <>
              <LightModeIcon
                sx={{
                  mr: 1.5,
                  color: "#f5c542",
                }}
              />
              Light Mode
            </>
          ) : (
            <>
              <DarkModeIcon
                sx={{
                  mr: 1.5,
                  color: "#424754",
                }}
              />
              Dark Mode
            </>
          )}
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={notificationAnchor}
        open={Boolean(notificationAnchor)}
        onClose={closeNotifications}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 240,
            bgcolor: darkMode ? "#24282b" : "#ffffff",
          },
        }}
      >
        <MenuItem
          sx={{
            display: "block",
            whiteSpace: "normal",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: primaryColor,
            }}
          >
            Notifications
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              fontSize: 12,
              color: secondaryColor,
            }}
          >
            No new notifications.
          </Typography>
        </MenuItem>
      </Menu>

      <Dialog
        open={exitOpen}
        onClose={() => setExitOpen(false)}
      >
        <DialogTitle>Exit App</DialogTitle>

        <DialogContent>
          <Typography>
            Are you sure you want to exit the application?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setExitOpen(false)}
            sx={{
              textTransform: "none",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={() => setExitOpen(false)}
            sx={{
              bgcolor: "#0058be",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#004a9f",
                boxShadow: "none",
              },
            }}
          >
            Exit App
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;