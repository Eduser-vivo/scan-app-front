import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TopAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/" style={{color:"white", textDecoration:"none"}} ><Button color="inherit"> Historique </Button></NavLink>
                        <NavLink to="/filtre" style={{ color: "white", textDecoration: "none" }}><Button color="inherit"> Filtre des fiches </Button></NavLink>
                        <NavLink to="/nouvelle-fiche" style={{color:"white", textDecoration:"none"}}><Button color="inherit"> Nouvelle fiche </Button></NavLink>      
                    </Typography>
                    <NavLink to="/login" style={{ color: "white", textDecoration: "none" }}><Button color="inherit">Login</Button></NavLink>
                </Toolbar>
            </AppBar>
            <br />
        </div>
    );
}

