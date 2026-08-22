import React from 'react'
import { Box, Button } from '@mui/material'
const CategoryTab = () => {
  return (
    <>
     <Box  sx={{display:'flex',gap:1, flexWrap:'wrap', mt:2,}}>

          <Button variant='contained'sx={{borderRadius:4}}>All Products</Button>
          <Button variant='outlined'sx={{borderRadius:4}}>Groceries</Button>
          <Button variant='outlined'sx={{borderRadius:4}}>Beverages</Button>
          <Button variant='outlined'sx={{borderRadius:4}}>Snacks</Button>
          <Button variant='outlined'sx={{borderRadius:4}}>Personal care</Button>

     </Box>
    </>
  )
}

export default CategoryTab