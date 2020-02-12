import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid'
import '../../src/index.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: '4rem',
        fontSize: '8px'
    },
    menuButton: {
        margin: theme.spacing(0),
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: '35%',
        backgroundColor: 'royalblue',
        color: 'white',
        fontSize: '10px',
        margin: '0 auto'
    },
    content: {
        flexGrow: 0,
        padding: theme.spacing(0),
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const getTitle = (link) => {
        const removed = link.slice(1)
        return removed.toUpperCase()
    }

    const links = ['/table', '/players', '/results', '/challenges', '/dashboard', '/rules']
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                {links.map((link, index) => {
                    return (<ListItem button key={uuid()} onClick={handleDrawerToggle}>
                        <NavLink to={link}><ListItemText />{getTitle(link)}</NavLink>
                    </ListItem>)
                })}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar disableGutters='true' variant='dense'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="p">
                        <p>Lockers 8 ball world</p>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'top'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;