import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Analytics } from "@vercel/analytics/react"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Avatar } from '@mui/material';
import logo from '../assets/img/banner-wht.png';


const pages = ['Plans', 'Jobs'];
const settings = [];


function Navbar() {

    const appBarStyle = {
        textDecoration: 'none',
        backgroundColor: 'black', // Set the AppBar background color to black
    }

    const { googleSignIn, user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate('/account');
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     if (user != null) {
    //         navigate('/')
    //     }
    // }, [user]);

    const handleSignOut = async () => {
        try {
            await logOut();
            // navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="fixed" style={appBarStyle} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Rubik',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                                color: 'inherit'
                            }
                        }}
                    >
                        <img src={logo} alt="Self Guru Logo" style={{ maxWidth: '200px', height: 'auto' }} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
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
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiPaper-root': { // This targets the Paper component inside the Menu
                                    backgroundColor: 'black', // Set the background color to black
                                    color: 'white', // Set the text color to white
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${page}`}>{page}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to='/account'>Blog</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexShrink: 0,
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            fontSize: {
                                sm: 25,
                                xs: 15,
                            },
                            letterSpacing: '2px',
                            color: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                                color: 'inherit'
                            }
                        }}
                    >
                        <img src={logo} alt="Self Guru Logo" style={{ maxWidth: '200px', height: 'auto' }} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingLeft: '10%' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'flex', marginLeft: '10px' }}
                            >
                                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '700' }} to={`/${page}`}>{page}</Link>
                            </Button>
                        ))}

                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '700' }} to='/account'>Blog</Link>
                        </Button>
                    </Box>

                    <Box sx={{ flexShrink: 0 }}>

                        {user?.displayName ? <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar
                                alt={user.displayName}
                                src={user.photoURL}
                                sx={{ width: 35, height: 35, marginRight: 1 }} />
                            <Link to='/' onClick={handleSignOut}><LogoutIcon style={{ color: 'orange' }} /></Link>
                        </Container> : <Container>


                            <LoginIcon onClick={handleGoogleSignIn} style={{ color: 'lightgreen', marginLeft: '10px', cursor: 'pointer' }} />
                        </Container>}

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;