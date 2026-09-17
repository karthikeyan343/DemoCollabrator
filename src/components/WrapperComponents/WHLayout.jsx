import React, { useState } from "react";
import { Box } from "@mui/material";
import WHSidebar from "../SpecifiedComponents/Inventory/WhSidebar";
import WHNavbar from "../SpecifiedComponents/Inventory/WHNavbar";
import InventoryPageView from "../SpecifiedComponents/Inventory/InventoryPageView";



const WHLayout = () => {
  const [activeTab, setActiveTab] = useState('Inventory');

  const handleExport = () => alert('Exporting Inventory Log...');
  const handleReceiveStock = () => alert('Opening Receive Stock modal...');
  const handleNewSale = () => alert('Creating New Sale...');

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', bgcolor: '#f8f9fa', overflow:'hidden' }}>
      
     
      <WHSidebar  
        activeTab={activeTab} 
        onTabClick={setActiveTab} 
        onNewSaleClick={handleNewSale} 
        sx={{width:'300px'}}
      />

      
      <WHNavbar />

     
      <InventoryPageView 
        onExportClick={handleExport} 
        onReceiveStockClick={handleReceiveStock} 
      />

    </Box>
  )
}

export default WHLayout;