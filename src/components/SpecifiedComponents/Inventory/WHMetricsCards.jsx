import React from 'react'
import { Box, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import WarningIcon from '@mui/icons-material/Warning';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import ErrorOutline from '@mui/icons-material/ErrorOutline';

const WHMetricsCards = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
      <Box sx={{ flex: 1, p: 2.5, bgcolor: '#ffffff', border: '1px solid #c2c6d6', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#555f6f', mb: 1.5 }}>
          <CategoryIcon fontSize="small" />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>Total SKUs</Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#191c1d' }}>4,289</Typography>
        <Typography variant="caption" sx={{ color: '#00855b', mt: 1, display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 500 }}>
          <TrendingUpIcon sx={{ fontSize: '14px !important' }} /> +12 this week
        </Typography>
      </Box>

      <Box sx={{ flex: 1, p: 2.5, bgcolor: '#ffffff', border: '1px solid #c2c6d6', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#555f6f', mb: 1.5 }}>
          <WarningIcon fontSize="small" />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>Out of Stock</Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#191c1d' }}>24</Typography>
        <Typography variant="caption" sx={{ color: '#ba1a1a', mt: 1, display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 500 }}>
          {/* <ErrorOutline sx={{ fontSize: '14px !important' }} /> Needs attention? */}
        </Typography>
      </Box>

      <Box sx={{ flex: 1, p: 2.5, bgcolor: '#ffffff', border: '1px solid #c2c6d6', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#555f6f', mb: 1.5 }}>
          <AccountBalanceWalletIcon fontSize="small" />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>Inventory Value</Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#191c1d' }}>$1.2M</Typography>
        <Typography variant="caption" sx={{ color: '#555f6f', mt: 1, display: 'block', fontWeight: 500 }}>Updated 5 mins ago</Typography>
      </Box>
    </Box>
  );
}
  
export default WHMetricsCards;