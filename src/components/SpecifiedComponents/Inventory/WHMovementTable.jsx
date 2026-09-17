import React from 'react'

import { Box, Typography, IconButton, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';


const movements = [
  { name: 'Organic Whole Milk 1G', sku: 'DY-9021', type: 'Restock', qty: '+144', user: 'System Auto', time: '10:42 AM', typeColor: 'success' },
  { name: 'Artisan Sourdough Loaf', sku: 'BK-3312', type: 'Sale', qty: '-2', user: 'Cashier John', time: '10:35 AM', typeColor: 'default' },
  { name: 'Espresso Roast Beans 1kg', sku: 'CF-1099', type: 'Sale', qty: '-1', user: 'Term 02', time: '10:15 AM', typeColor: 'default' },
  { name: 'Premium Olive Oil 500ml', sku: 'PT-4421', type: 'Damage', qty: '-3', user: 'Mgr Sarah', time: '09:50 AM', typeColor: 'error' },
];


const WHMovementTable = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', border: '1px solid #c2c6d6', borderRadius: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box sx={{ p: 2.5, borderBottom: '1px solid #c2c6d6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#f8f9fa' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Recent Movements</Typography>
        <IconButton size="small"><FilterListIcon /></IconButton>
      </Box>
      <TableContainer sx={{ flexGrow: 1 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ bgcolor: '#f3f4f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, color: '#555f6f' }}>Item & SKU</TableCell>
              <TableCell sx={{ fontWeight: 600, color: '#555f6f' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 600, color: '#555f6f', textAlign: 'right' }}>Qty Change</TableCell>
              <TableCell sx={{ fontWeight: 600, color: '#555f6f' }}>User</TableCell>
              <TableCell sx={{ fontWeight: 600, color: '#555f6f' }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movements.map((row, index) => (
              <TableRow key={index} sx={{ '&:hover': { bgcolor: '#f3f4f5' } }}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>{row.name}</Typography>
                  <Typography variant="caption" sx={{ color: '#555f6f', fontFamily: 'monospace' }}>SKU: {row.sku}</Typography>
                </TableCell>
                <TableCell>
                  <Box component="span" sx={{ px: 1, py: 0.5, borderRadius: 1, fontSize: '11px', fontWeight: 600, bgcolor: row.typeColor === 'success' ? 'rgba(0,133,91,0.1)' : row.typeColor === 'error' ? 'rgba(186,26,26,0.1)' : 'rgba(85,95,111,0.1)', color: row.typeColor === 'success' ? '#00855b' : row.typeColor === 'error' ? '#ba1a1a' : '#555f6f' }}>
                    {row.type}
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: row.typeColor === 'error' ? '#ba1a1a' : '#191c1d' }}>{row.qty}</TableCell>
                <TableCell sx={{ color: '#555f6f' }}>{row.user}</TableCell>
                <TableCell sx={{ color: '#555f6f' }}>{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ p: 2, borderTop: '1px solid #c2c6d6', textAlign: 'center', bgcolor: '#f8f9fa' }}>
        <Button color="primary" sx={{ textTransform: 'none', fontWeight: 600 }}>View Full Log</Button>
      </Box>
    </Box>
  )
}

export default WHMovementTable