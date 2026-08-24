import { Box } from '@mui/material'
import SearchBar from './SearchBar'
import CategoryTab from './CategoryTab'
import CardDetails from '../../../data/CardDetails'
import Carde from './Carde'
import { useState } from 'react'
const Main = () => {
 
   const [search, setSearch] = useState('');

   const filteredSearch = CardDetails.filter((card)=>
    card.title.toLowerCase().includes(search.toLowerCase())
   )

  return (
    <>
     <SearchBar search={search} setSearch={setSearch}/>
     <CategoryTab/>
     <Box
     sx={{
      display:'flex',
      flexWrap:'wrap',
      gap:2,
      mt:2
     }}>
     {
      filteredSearch.map((carde)=> <Carde key={carde.id} carde={carde}/>)
     }
    </Box>
    </>
  )
}

export default Main