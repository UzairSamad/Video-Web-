import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // flexGrow: 5,
        marginRight: '10%'
    },
}));


const SearchBar = (props) => {
    const [term, setTerm] = React.useState(null)

    const onInputChange = (e) => {
        setTerm(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(term)
    }
    const classes = useStyles();

    return (


        <div>
            <AppBar position="fixed">
                <Toolbar style={{ display: 'flex', alignItems: 'space-around' }}>
                    <Typography variant="h6" className={classes.title}>
                        Video App
              </Typography>
                    <Grid item sm={4} md={8} >
                        <form className='ui form' onSubmit={onSubmit}>

                            <input type='text' placeholder='Search here..' onChange={onInputChange} />

                        </form>
                    </Grid>

                </Toolbar>


            </AppBar>

        </div>
    )

}

export default SearchBar