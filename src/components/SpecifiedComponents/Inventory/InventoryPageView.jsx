import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import WHMetricsCards from './WHMetricsCards';
import WHMovementTable from './WHMovementTable';
import WHAlerts from './WHAlerts';
import WHMap from './WHMap';

const InventoryPageView = ({ onExportClick, onReceiveStockClick }) => {
  return (
    <Box
      component="main"
      sx={{
        ml: '260px',
        mt: '64px',
        p: '24px',
        width: 'calc(100% - 260px)',
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        bgcolor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#191c1d', fontSize: '32px', lineHeight: '40px' }}>
            Warehouse & Inventory
          </Typography>
          <Typography variant="body1" sx={{ color: '#555f6f', mt: 1, fontSize: '16px' }}>
            Manage stock levels, locations, and track movements across all zones.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={onExportClick}
            sx={{ height: 48, px: 3, borderColor: '#c2c6d6', color: '#191c1d', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#e7e8e9' } }}
          >
            Export Log
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onReceiveStockClick}
            sx={{ height: 48, px: 3, bgcolor: '#0058be', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#004395' } }}
          >
            Receive Stock
          </Button>
        </Box>
      </Box>

      
      <Box sx={{ display: 'flex', gap: 3, pb: 20, flexWrap: { xs: 'wrap', lg: 'nowrap' } }}>
        {/* Left Section (Metrics & Table) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: { lg: '0 0 66.666%' }, width: '100%' }}>
          <WHMetricsCards />
          <WHMovementTable />
        </Box>

       
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: { lg: '0 0 33.333%' }, width: '100%' }}>
          <WHAlerts />
          <WHMap />
        </Box>
      </Box>
    </Box>
  )
}

export default InventoryPageView;