import React from 'react'
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CategoryIcon from '@mui/icons-material/Category';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'POS/Billing', icon: <PointOfSaleIcon /> },
  { text: 'Products', icon: <CategoryIcon /> },
  { text: 'Inventory', icon: <WarehouseIcon />, active: true },
  { text: 'Sales', icon: <TrendingUpIcon /> },
  { text: 'Customers', icon: <PeopleIcon /> },
];

const WhSidebar = ({ drawerWidth, activeTab, onTabClick, onNewSaleClick }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: drawerWidth,
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        borderRight: '1px solid #c2c6d6',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: 1,
        zIndex: 20,
        bgcolor: '#ffffff',
      }}
    >
      <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: '#e7e8e9', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, overflow: 'hidden' }}>
          <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVDaa-B9dAIAlb5RVrNWifYXJWdh-4-z0qi4M2PMvZkbTyGJ3-3kaOMgwIqmJuy7-zISZVQljsyZd8xE2g6s0cDShOhHYvpbzEiP4Xja_TAi_Xg_izvpK8YCYLt6qrDs9YKH-sycsqFm1N0dG8o-Urljwlj3I01ryeztcgEVEIRuvMpWHbPmN6hjjvv7fIbeYlmoa8eBZoeUvkdIJ2IxBJ2R2-6Su90DBB4GSske_b7tUu-cBBDSlwnQ" sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0058be' }}>Kinetic Retail</Typography>
        <Typography variant="caption" sx={{ color: '#555f6f', mt: 0.5 }}>Terminal #01</Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        onClick={onNewSaleClick}
        sx={{ bgcolor: '#0058be', color: '#ffffff', borderRadius: 2, py: 1.5, mb: 2, textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#004395' } }}
      >
        New Sale
      </Button>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, flex: 1, overflowY: 'auto' }}>
        {menuItems.map((item) => {
          const isActive = item.text === activeTab;
          return (
            <ListItem
              button="true"
              key={item.text}
              onClick={() => onTabClick(item.text)}
              sx={{
                borderRadius: 2,
                bgcolor: isActive ? '#d6e0f3' : 'transparent',
                color: isActive ? '#121c2a' : '#555f6f',
                fontWeight: isActive ? 'bold' : 'normal',
                '&:hover': { bgcolor: '#e7e8e9', color: '#0058be' },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '14px', fontWeight: isActive ? 700 : 500 }} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  )
}

export default WhSidebar;