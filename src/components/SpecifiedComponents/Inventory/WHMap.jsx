import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
 

const WHMap = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', border: '1px solid #c2c6d6', borderRadius: 2, display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
      <Box sx={{ p: 2.5, borderBottom: '1px solid #c2c6d6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#f8f9fa' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Warehouse Zones</Typography>
        <MapIcon color="action" fontSize="small" />
      </Box>
      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5, flexGrow: 1 }}>
          <Box sx={{ border: '2px solid rgba(0,88,190,0.2)', bgcolor: 'rgba(0,88,190,0.05)', p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2" sx={{ color: '#0058be', fontWeight: 600 }}>Zone A</Typography>
            <Box><Typography variant="caption" sx={{ color: '#555f6f' }}>Dry Goods</Typography><Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 500, mt: 0.5 }}>85% Cap</Typography></Box>
          </Box>
          <Box sx={{ border: '2px solid #c2c6d6', bgcolor: '#f8f9fa', p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Zone B</Typography>
            <Box><Typography variant="caption" sx={{ color: '#555f6f' }}>Cold Storage</Typography><Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 500, mt: 0.5 }}>60% Cap</Typography></Box>
          </Box>
          <Box sx={{ border: '2px solid rgba(186,26,26,0.3)', bgcolor: 'rgba(186,26,26,0.05)', p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2" sx={{ color: '#ba1a1a', fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>Zone C </Typography>
            <Box><Typography variant="caption" sx={{ color: '#555f6f' }}>Produce</Typography><Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 500, mt: 0.5, color: '#ba1a1a' }}>98% Cap</Typography></Box>
          </Box>
          <Box sx={{ border: '2px solid #c2c6d6', bgcolor: '#f8f9fa', p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Zone D</Typography>
            <Box>
              <Typography variant="caption" sx={{ color: '#555f6f' }}>Receiving</Typography>
              <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 500, mt: 0.5 }}>20% Cap</Typography></Box>
          </Box>
        </Box>
        <Button variant="contained" sx={{ height: 48, bgcolor: '#edeeef', color: '#191c1d', textTransform: 'none', fontWeight: 600, boxShadow: 'none', '&:hover': { bgcolor: '#e1e3e4' } }}>
          Detailed Floorplan
        </Button>
      </Box>
    </Box>
  )
}

export default WHMap