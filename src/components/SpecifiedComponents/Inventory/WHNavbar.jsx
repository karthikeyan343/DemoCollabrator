import React from 'react';
import { Box, Typography, InputBase, IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const WHNavbar = ({ drawerWidth, onNotificationClick, onSettingsClick, onLogoutClick }) => {

    return (

    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        height: 64,
        borderBottom: '1px solid #c2c6d6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        ml: `${drawerWidth}px`,
        zIndex: 10,
        bgcolor: '#f8f9fa',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, color: '#191c1d', mr: 2 }}>Kinetic POS</Typography>
        <Box component="nav" sx={{ display: 'flex', height: '100%' }}>
          {['Open', 'INV-2024-001', '10:45 AM'].map((tab, idx) => (
            <Box
              key={tab}
              component="a"
              href="#"
              sx={{
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                px: 2,
                textDecoration: 'none',
                color: idx === 2 ? '#0058be' : '#424754',
                fontWeight: idx === 2 ? 700 : 400,
                // borderBottom: idx === 2 ? '2px solid #0058be' : 'none',
                '&:hover': { color: '#0058be' },
              }}
            >
              {tab}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ position: 'relative', width: 256, display: { xs: 'none', lg: 'block' } }}>
          <SearchIcon sx={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#727785' }} />
          <InputBase
            placeholder="Search inventory..."
            sx={{ width: '100%', bgcolor: '#ffffff', border: '1px solid #c2c6d6', borderRadius: 2, pl: 5, pr: 2, py: 1, height: 48 }}
          />
        </Box>
        <IconButton><NotificationsIcon /></IconButton>
        <IconButton><SettingsIcon /></IconButton>
        <Box sx={{ width: '1px', height: 24, bgcolor: '#c2c6d6', mx: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer', p: 0.5, pr: 2, borderRadius: '50px', '&:hover': { bgcolor: '#e7e8e9' } }}>
          <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLdpp3FvxYLvV4JrwtZWS0kW5aPqk9LVz70Eqar_b9M8ioFQ9x3QTTyCCKnQyk_zKR14LVJ__YUMcCal5ubWrd9hxih3_FdBtq1ST7vrDxIpgLV9ZCVMou9H79hJoJdOHT0M5ncpLx-4Fh1aclWB4XFQIueo0WlHwu46mpZLgT9aaSyNx0hP6RgoRacht4MdTbxnh4zE9QY4hehARBF00htHx4cMjGVD3eRrXTiIdPCaPMgyW8qq7_nA" sx={{ width: 32, height: 32 }} />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>Cashier John</Typography>
          <LogoutIcon fontSize="small" sx={{ color: '#727785' }} />
        </Box>
      </Box>
    </Box>

    )
}

export default WHNavbar