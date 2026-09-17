import {
    Typography, Box, InputBase,
    IconButton, Button, Menu, MenuItem // <--- Added Menu here
} from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { Search as SearchIcon, Clear as ClearIcon, FilterList as FilterListIcon } from '@mui/icons-material'


const Searchbar = ({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedStockStatus,
    setSelectedStockStatus,
    onOpenAddModal,     
    onOpenFiltersModal
}) => {

    const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
    const [statusAnchorEl, setStatusAnchorEl] = useState(null);

    const categories = ['All Categories', 'Groceries', 'Dairy', 'Bakery', 'Beverages'];
    const stockStatuses = ['Stock Status', 'In Stock', 'Low Stock', 'Out of Stock'];

    return (
        <Box
         sx={{
            m:2
         }}
        >

            <Box sx={{display:'flex' , justifyContent:'space-between' , marginBottom:'20px'}}>
            <Typography component='p' variant='h5' sx={{
                fontSize: '30px',
                fontWeight: '700'
            }}>
                Product Management
            </Typography>

            <Button variant='contained' onClick={onOpenAddModal} sx={{fontFamily:'inherit', fontWeight:'650'}}>
               + Add New Product
            </Button>

        </Box>

            <Box sx={{
                 padding: '20px',
                border: '1px solid #cac6c6',
                borderRadius: '20px',
                display: 'flex',
                 gap: '30px'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#e8ecf1',
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        border: '1px solid #e5e7eb',
                        flexGrow: 1,
                        maxWidth: '450px',
                        boxShadow: '0px 1px 2px rgba(0,0,0,0.02)',
                        '&:focus-within': {
                            borderColor: '#3b82f6',
                            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)'
                        }
                    }}
                >
                    <SearchIcon sx={{ color: '#9ca3af', mr: 1, fontSize: '1.2rem' }} />
                    <InputBase
                        placeholder="Search by name, barcode or SKU..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{
                            fontSize: '0.875rem',
                            color: '#1f2937',
                            width: '100%',
                            '& input::placeholder': { color: '#9ca3af', opacity: 1 },
                        }}
                    />
                    {searchQuery && (
                    <IconButton size="small" sx={{ p: 0.5 }}>
                        <ClearIcon sx={{ fontSize: '1rem', color: '#9ca3af' }} />
                    </IconButton>
                    )}
                </Box>

                <Box sx={{ minWidth: '150px', }}>
                    <Button
                    variant="outlined"
                    onClick={(e) => setCategoryAnchorEl(e.currentTarget)}
                    sx={{
                        borderColor: '#e5e7eb',
                        color: '#4b5563',
                        backgroundColor: '#e8ecf1',
                        textTransform: 'none',
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                    }}
                >
                    {selectedCategory} ▾
                </Button>

                <Menu anchorEl={categoryAnchorEl} open={Boolean(categoryAnchorEl)} onClose={() => setCategoryAnchorEl(null)}>
                        {categories.map((cat) => (
                            <MenuItem key={cat} onClick={() => { setSelectedCategory(cat); setCategoryAnchorEl(null); }}>
                                {cat}
                            </MenuItem>
                        ))}
                    </Menu>

                </Box>

            

                <Box sx={{ minWidth: '150px', height: '10px', }}>
                    <Button
                    variant="outlined"
                    onClick={(e) => setStatusAnchorEl(e.currentTarget)}
                    sx={{
                        borderColor: '#e5e7eb',
                        color: '#4b5563',
                        backgroundColor: '#e8ecf1',
                        textTransform: 'none',
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                    }}
                >
                  {selectedStockStatus} ▾
                </Button>

                <Menu anchorEl={statusAnchorEl} open={Boolean(statusAnchorEl)} onClose={() => setStatusAnchorEl(null)}>
                        {stockStatuses.map((status) => (
                            <MenuItem key={status} onClick={() => { setSelectedStockStatus(status); setStatusAnchorEl(null); }}>
                                {status}
                            </MenuItem>
                        ))}
                    </Menu>
                    

                </Box>

                <Box>
                    <Button
                        variant="outlined"
                        startIcon={<FilterListIcon />}
                        onClick={onOpenFiltersModal}
                        sx={{
                            borderColor: '#e5e7eb',
                            color: '#4b5563',
                            backgroundColor: '#e8ecf1',
                            textTransform: 'none',
                            fontWeight: 500,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                        }}
                    >
                        More Filters
                    </Button>
                </Box>


            </Box>

        </Box>
    )
}

export default Searchbar