import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const alerts = [
  { item: 'Avocado Hass', zone: 'Zone A - Shelf 2', qty: '2 left' },
  { item: 'Almond Milk 1L', zone: 'Zone B - Aisle 4', qty: '0 left' },
];


const WHAlerts = () => {
  return (

    <Box sx={{ p: 2.5, bgcolor: '#ffdad6', border: '1px solid rgba(186,26,26,0.2)', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#93000a', mb: 2 }}>
        <WarningIcon />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Critical Low Stock</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {alerts.map((alert, i) => (
          <Box key={i} sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.8)', borderRadius: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(186,26,26,0.1)' }}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{alert.item}</Typography>
              <Typography variant="caption" sx={{ color: '#555f6f' }}>{alert.zone}</Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body2" sx={{ color: '#ba1a1a', fontWeight: 'bold', fontFamily: 'monospace' }}>{alert.qty}</Typography>
              <Button size="small" sx={{ textTransform: 'none', p: 0, minWidth: 'auto', mt: 0.5 }}>Reorder</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>

    
  )
}

export default WHAlerts