import React from 'react'
import ProductNavBar from '../SpecifiedComponents/ProductManagement/ProductNavbar'
import { Box } from '@mui/material'
import ProductSidebar from '../SpecifiedComponents/ProductManagement/ProductSidebar'
import Searchbar from '../SpecifiedComponents/ProductManagement/Searchbar'
import ProductTable from '../SpecifiedComponents/ProductManagement/ProductTable'


const PMLayout = () => {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateRows:  '138px 1fr 1fr',
            gridTemplateColumns: '1fr 4fr ',
        }}>

            <Box sx={{
                gridRow:'1/3',
                gridColumn:'1/2'
            }}>
                <ProductSidebar />
            </Box>

            <Box sx={{
                gridRow:'1',
                gridColumn:'1/3',
                marginLeft:30
            }}>
                <ProductNavBar />
            </Box>

            <Box sx={{ 
                gridRow:'2',
                gridColumn:'2',
                marginLeft:-10,
                
            }}>
                <Searchbar />
            </Box>

            <Box sx={{
                gridRow:'3',
                gridColumn:'2/3',marginLeft:-10
            }}>
                <ProductTable />
            </Box>

        </Box>
    )
}

export default PMLayout