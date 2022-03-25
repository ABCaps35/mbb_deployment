import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Container, Typography, Box, IconButton, Toolbar, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

const pages = [
    {name: 'Crew Board', link: '/pirates', title: 'Pirate Crew', show: true},
    {name: 'Add Pirate', link: '/pirate/new', title: 'Add Pirate', show: true},
    {name: 'View Pirate', link: '/pirate/:id', title: 'Pirate Name', show: false}
]

const TopNavBar = (props) => {
    const { title } = props;
    const history = useHistory();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    }

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    }

    const clickHandler = (linkIn) => {
        history.push(linkIn);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{p: 1}}>
                <Toolbar disableGutters >
                    <Typography 
                        noWrap 
                        variant="h5" 
                        component="div" 
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        {title}
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton size="large"
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
                            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                            keepMounted
                            transformOrigin={{vertical: 'top',horizontal: 'left',}}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: { xs: 'block', md: 'none' }}}
                        >
                            {pages.filter((page)=>(page.show===true && page.link!==history.location.pathname))
                            .map((page,i) => (
                                <MenuItem key={i} onClick={(e) => clickHandler(page.link)}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                        {title}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.filter((page)=>(page.show===true && page.link!==history.location.pathname)).map((page,i) => (
                        <Button key={i} onClick={(e) => clickHandler(page.link)} sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page.name}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
                
            </Container>
        </AppBar>
    )
}

export default TopNavBar;