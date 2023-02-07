import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ArtiCraftIcon from '@material-ui/icons/Palette';
import ShopIcon from '@material-ui/icons/ShoppingCart';
import AboutIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '../Container/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    }));

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <HomeIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                MUSEUMVERSE
            </Typography>
            <div>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MoreVertIcon />
                </IconButton>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>
                    <ArtiCraftIcon />
                    &nbsp; ARTICRAFTS
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ShopIcon />
                    &nbsp; SHOP
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <AboutIcon />
                    &nbsp; ABOUT
                </MenuItem>
                </Menu>
            </div>
            </Toolbar>
        </AppBar>
        <Container />
        </div>
    );
    };

export default Navbar;
