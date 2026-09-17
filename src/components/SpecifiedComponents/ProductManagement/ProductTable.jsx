import React from 'react';
import {
    Table as MuiTable, // Renamed to avoid collision with component name
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Chip,
    Paper,                     
    Box,            
    Typography,      
    IconButton,      
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductTable = () => { 
    const product = {
        barcode: '123456789',
        price: '$10.00',
        status: 'In Stock',
        count: 5
    };

    return (
        <TableContainer  sx={{ borderRadius: 2, boxShadow: '0px 1px 3px rgba(0,0,0,0.05)',  }}>
            <MuiTable sx={{}}>
                <TableHead sx={{ backgroundColor: '#f9fafb' }}>
                    <TableRow>
                        <TableCell padding="checkbox"><Checkbox /></TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Product</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Barcode</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Category</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Price</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Status</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#4b5563' }} align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   
                    <TableRow>
                        <TableCell padding="checkbox"><Checkbox /></TableCell>
                        <TableCell>
                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                    Sample Product
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                                    SKU: SKU-001
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell sx={{ color: '#4b5563', fontSize: '0.875rem' }}>{product.barcode}</TableCell>
                        <TableCell>
                            <Chip
                                label="Electronics"
                                size="small"
                                sx={{ backgroundColor: '#f3f4f6', color: '#374151', fontWeight: 500 }}
                            />
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#1f2937' }}>{product.price}</TableCell>
                        <TableCell>
                            <Chip
                                label={product.status}
                                size="small"
                                sx={{
                                    backgroundColor: '#ecfdf5',
                                    color: '#059669',
                                    fontWeight: 600,
                                }}
                            />
                        </TableCell>
                        <TableCell align="right">
                            
                        </TableCell>
                    </TableRow>
                </TableBody>
            </MuiTable>
        </TableContainer> 
    );
};

export default ProductTable;