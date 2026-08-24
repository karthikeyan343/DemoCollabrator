import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Notifications as NotificationsIcon, Settings as SettingsIcon, Logout as LogoutIcon } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

const ProductNavBar = () => {

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ Left: '300px' }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 800,
                                letterSpacing: '1px',
                                color: 'black',
                                textDecoration: 'none',
                                fontFamily: 'inherit'
                            }}
                        >
                            Kinetic POS
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <Button sx={{ my: 2, color: 'grey', display: 'block', fontFamily: 'inherit', }}
                            >
                                Open
                            </Button>

                            <Button sx={{ my: 2, color: 'grey', display: 'block', fontFamily: 'inherit', }}
                            >
                                INV-2024-001
                            </Button>
                            <Button sx={{ my: 2, color: 'grey', display: 'block', fontFamily: 'inherit', }}
                            >
                                10:45 AM
                            </Button>
                            
                        </Box>


                        <Box sx={{ alignItems:'center', gap:'1.5' }}>
                            <IconButton size='small' sx={{ color: ' #4b5563' }}>

                                <NotificationsIcon size='small' />
                            </IconButton>

                            <IconButton size="small" sx={{ color: '#4b5563' }}>
                                <SettingsIcon fontSize="small" />
                            </IconButton>

                            <IconButton size="small" sx={{ color: '#4b5563' }}>
                                <LogoutIcon fontSize="small" />
                            </IconButton>

                            </Box>

                            {/* <Divider orientation="vertical" flexItem sx={{ my: 1, borderColor: '#2e2f31' }} /> */}
                       

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                           
                            <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}>
                                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.2, color: '#1f2937' }}>
                                    Cashier John
                                </Typography>
                                
                            </Box>
                           
                            <Avatar
                                alt="Cashier John"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 34, height: 34, bgcolor: '#3b82f6', fontSize: '0.875rem' }}
                            >
                                CJ
                            </Avatar>
                           
                        </Box>
                             
                      
                    </Toolbar>

                </Container>
            </AppBar>



        </Box>
    )
}

export default ProductNavBar