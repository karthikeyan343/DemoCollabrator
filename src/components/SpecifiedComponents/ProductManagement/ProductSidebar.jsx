import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';
// import Navbar from '../SpecifiedComponent/NavBar';

function ProductSidebar () {

    const drawerWidth = 240;
    return (

        <>
            <Box sx={{ display: 'flex', overflow:'hidden' }}>
                <CssBaseline />
                 
                
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {/* <Toolbar /> */}
                  

                    <Box component='div' align='center' sx={{display:"flex", flexDirection:'column', gap:'20px', padding:{xs:'15px' , md:'20px'}}} >
                        <Box component='img' src="#" alt='logo'  />
                        <Typography variant='h5' sx={{
                            color: '#3538f7',
                            fontFamily: 'Inter,sans-serif',
                            fontWeight:'600',
                        }}>Kinetic Retail</Typography>
                        <Typography sx={{ color: 'grey' }}>Terminal #01</Typography>
                    </Box>

                    <Box align='center' >

                        <Button variant='contained' sx={{
                            width: { xs: '80%', md: '80%' },
                            paddingX: { xs: '30px', md: '40px' },
                            justifyContent: 'center'
                        }}> + New Sale</Button> </Box>

                    <List>
                        {[
                            { text: 'Dashboard', icon: <DashboardIcon /> },
                            { text: 'Billing/POS', icon: <PointOfSaleIcon /> },
                            { text: 'Products', icon: <CategoryIcon /> },
                            { text: 'Inventory', icon: <InventoryIcon /> },
                            { text: 'Sales', icon: <TrendingUpIcon /> },
                            { text: 'Customers', icon: <PeopleIcon /> },

                        ].map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                    </List>
                    <Divider />

                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar /> 

                </Box>
            </Box>


        </>
    )
}

export default ProductSidebar