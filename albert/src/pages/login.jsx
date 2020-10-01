import React from 'react';
import {Button, Grid,makeStyles, Typography, Input, Link} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {

    },
    field: {
        width: '20rem',
        fontSize: '.9rem',
    },
    button: {
        backgroundColor: '#57068C',
        color: '#fff',
        padding: '.5rem',
        width: '20rem',
        boxShadow: '0px 4px 10px rgba(16, 156, 241, 0.24)',
        borderRadius: '4px',
        textTransform: 'none',
    },
    submitBtn: {
        backgroundColor: '#9066FF',
        color: '#fff',
        textTransform: 'none',
        marginTop: '1rem',
    },
}));

const Login = (props) => {
    const classes = useStyles();
    return (
        <div className = {classes.container}>
            <Grid container justify = 'center' alignItems = 'center' styles = {{width: '100vw', height: '100vh'}}>
                <Grid item>
                    <Grid container direction = 'column' alignItems = 'flex-start' justify = 'center' spacing = {5}>

                        <Grid item>
                            <Typography variant = 'h5' styles = {{fontWeight: 'bold', color: '#334D6E'}}>NYU Log In</Typography>
                            <Typography variant = 'subtitle2' styles = {{opacity: '.5'}}>Login to NYU Classes </Typography>
                        </Grid> 
                        <Grid item>
                            <Input placeholder = "NetID" className = {classes.field} type = "text"/>
                        </Grid>
                        <Grid item>
                            <Input placeholder = "Password" className =  {classes.field} type = "password"/>
                        </Grid>
                        <Grid item>
                            <Button  className = {classes.button}>Log In</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

export default Login;