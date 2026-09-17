import React, { useState } from 'react';
import {
    Table as MuiTable,
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
    Button      
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductTable = ({ 
    products = [], 
    onEdit, 
    onDelete, 
    selectedIds = [], 
    onSelectAll, 
    onSelectOne, 
    onBulkDelete 
}) => { 
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const totalPages = Math.ceil(products.length / rowsPerPage) || 1;
    const indexOfLastRow = page * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentProducts = products.slice(indexOfFirstRow, indexOfLastRow);

    const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));

    const isAllSelected = products.length > 0 && currentProducts.every(p => selectedIds.includes(p.id));
    const isIndeterminate = selectedIds.length > 0 && !isAllSelected;

    return (
        <Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
            
            {/* Bulk Action Toolbar */}
            {selectedIds.length > 0 && (
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    backgroundColor: '#eff6ff', 
                    border: '1px solid #bfdbfe',
                    borderRadius: 2, 
                    px: 3, 
                    py: 1.5, 
                    mb: 2 
                }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1d4ed8' }}>
                        {selectedIds.length} item{selectedIds.length > 1 ? 's' : ''} selected
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Button 
                            variant="outlined" 
                            size="small" 
                            color="error" 
                            startIcon={<DeleteIcon />}
                            onClick={onBulkDelete}
                            sx={{ textTransform: 'none', backgroundColor: 'white' }}
                        >
                            Delete Selected
                        </Button>
                    </Box>
                </Box>
            )}

            <TableContainer 
                component={Paper} 
                sx={{ 
                    borderRadius: 2, 
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.05)', 
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': { display: 'none' },
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none'
                }}
            >
                <MuiTable sx={{ minWidth: 700 }}>
                    <TableHead sx={{ backgroundColor: '#f9fafb' }}>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox 
                                    checked={isAllSelected}
                                    indeterminate={isIndeterminate}
                                    onChange={onSelectAll}
                                />
                            </TableCell>
                            <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Product</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Barcode</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Category</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Price</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: '#4b5563' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: '#4b5563' }} align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product) => {
                                const isChecked = selectedIds.includes(product.id);
                                return (
                                    <TableRow key={product.id} selected={isChecked}>
                                        <TableCell padding="checkbox">
                                            <Checkbox 
                                                checked={isChecked}
                                                onChange={() => onSelectOne(product.id)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                                    {product.name}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                                                    SKU: {product.sku}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ color: '#4b5563', fontSize: '0.875rem' }}>{product.barcode}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={product.category}
                                                size="small"
                                                sx={{ backgroundColor: '#f3f4f6', color: '#374151', fontWeight: 500 }}
                                            />
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#1f2937' }}>₹{product.price.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={product.status === 'In Stock' ? `In Stock (${product.count})` : product.status === 'Low Stock' ? `Low Stock (${product.count})` : 'Out of Stock'}
                                                size="small"
                                                sx={{ backgroundColor: '#ecfdf5', color: '#059669', fontWeight: 600 }}
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small" onClick={() => onEdit(product)}><EditIcon fontSize="small" /></IconButton>
                                            <IconButton size="small" onClick={() => onDelete(product.id)} sx={{ color: '#ef4444' }}><DeleteIcon fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow> 
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7} align="center" sx={{ py: 4, color: '#9ca3af' }}>
                                    No products found matching your search criteria.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </MuiTable>
            </TableContainer>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, px: 1 }}>
                <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    Showing {products.length > 0 ? indexOfFirstRow + 1 : 0} to {Math.min(indexOfLastRow, products.length)} of {products.length} entries
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        startIcon={<ChevronLeftIcon />}
                        sx={{ textTransform: 'none', borderColor: '#e5e7eb', color: '#374151' }}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={handleNextPage}
                        disabled={page >= totalPages}
                        endIcon={<ChevronRightIcon />}
                        sx={{ textTransform: 'none', borderColor: '#e5e7eb', color: '#374151' }}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductTable;