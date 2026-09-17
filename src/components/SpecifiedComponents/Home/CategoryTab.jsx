import React from 'react'
import { Box, Button } from '@mui/material'
const CategoryTab = ({setSelectCategory}) => {
  return (
    <>
     <Box  sx={{display:'flex',gap:1, flexWrap:'wrap', m:3,}}>

          <Button variant='contained'sx={{borderRadius:4}} onClick={()=>setSelectCategory('All Products')}>All Products</Button>
          <Button variant='outlined'sx={{borderRadius:4}} onClick={()=>setSelectCategory('Groceries')}>Groceries</Button>
          <Button variant='outlined'sx={{borderRadius:4}} onClick={()=>setSelectCategory('Beverages')}>Beverages</Button>
          <Button variant='outlined'sx={{borderRadius:4}} onClick={()=>setSelectCategory('Snacks')}>Snacks</Button>
          <Button variant='outlined'sx={{borderRadius:4}} onClick={()=>setSelectCategory('Personal Care')}>Personal care</Button>

     </Box>
    </>
  )
}

export default CategoryTab