import { Box } from '@mui/material'
import SearchBar from './SearchBar'
import CategoryTab from './CategoryTab'
import CardDetails from '../../../data/CardDetails'
import Carde from './Carde'
import { useState } from 'react'
const Main = () => {
 
   const [searchText, setSearchText] = useState('');
   const [search, setSearch] = useState('');
   const [selectCategory, setSelectCategory]=useState('All Products');

   const filteredCategory = selectCategory == 'All Products'? CardDetails :
   CardDetails.filter((card)=>card.category==selectCategory);

   const filteredSearch = filteredCategory.filter((card)=>
    card.title.toLowerCase().includes(search.toLowerCase())
   )
    const handleSearch = () => {
    setSearch(searchText);
  };

  return (
    <>
     <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
     <CategoryTab setSelectCategory={setSelectCategory}/>
     <Box
     sx={{
      display:'flex',
      flexWrap:'wrap',
      gap:2,
      m:2
     }}>
     {
      filteredSearch.map((carde)=> <Carde key={carde.id} carde={carde}/>)
     }
    </Box>
    </>
  )
}

export default Main