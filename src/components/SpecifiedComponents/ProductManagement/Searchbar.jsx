import {
    Typography, Box, InputBase,
    IconButton, Button
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import { Search as SearchIcon, Clear as ClearIcon, FilterList as FilterListIcon, } from '@mui/icons-material'

const Searchbar = () => {


    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };


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

            <Button variant='contained' sx={{fontFamily:'inherit', fontWeight:'650'}}>
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
                        // value={searchQuery}
                        // onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{
                            fontSize: '0.875rem',
                            color: '#1f2937',
                            width: '100%',
                            '& input::placeholder': { color: '#9ca3af', opacity: 1 },
                        }}
                    />
                    {/* {searchQuery && ( */}
                    <IconButton size="small" sx={{ p: 0.5 }}>
                        <ClearIcon sx={{ fontSize: '1rem', color: '#9ca3af' }} />
                    </IconButton>

                </Box>

                <Box sx={{ minWidth: '150px', }}>
                    <Button
                    variant="outlined"
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
                    All Categories ▾
                </Button>
                </Box>

                <Box sx={{ minWidth: '150px', height: '10px', }}>
                    <Button
                    variant="outlined"
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
                   Stock Status ▾
                </Button>
                    

                </Box>

                <Box>
                    <Button
                        variant="outlined"
                        startIcon={<FilterListIcon />}
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