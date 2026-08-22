import React from 'react'
import { TextField, Box } from '@mui/material'
import SearchBar from './SearchBar'
import CategoryTab from './CategoryTab'
import CardDetails from '../../../data/CardDetails'
import Carde from './Carde'
const Main = () => {
  return (
    <>
     <SearchBar/>
     <CategoryTab/>
     <Box
     sx={{
      display:'flex',
      flexWrap:'wrap',
      gap:2,
      mt:2
     }}>
     {
      CardDetails.map((carde)=> <Carde key={carde.id} carde={carde}/>)
     }
    </Box>
    </>
  )
}

export default Main