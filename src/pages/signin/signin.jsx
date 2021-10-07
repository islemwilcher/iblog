import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Container, Paper, Grid, Button , Typography, TextField } from "@material-ui/core"

import { signin } from '../../actions/auth'
import useStyles from './styles'

const Signin = () => {

    const [form, setForm] = useState({ email: '', password:'' })
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        dispatch(signin(form, history))
        
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography component="h1" variant="h5">Sign in</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <TextField className={classes.text} variant='outlined' name="email" label="Email Address" onChange={handleChange} type="email" fullWidth />
                    <TextField className={classes.text} variant='outlined' name="password" label="Password" onChange={handleChange} type='password' fullWidth />
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                    Sign In
                </Button>
                
                </form>
            </Paper>
        </Container>
    )
}

export default Signin
