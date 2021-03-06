import { useState } from "react";
import axios from 'axios';
import { Avatar, Container, Box, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { LockClockOutlined } from "@mui/icons-material";
import { useHistory } from "react-router";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const history = useHistory();

    const handleSignUp = () => {
        try {
            if(name.length == 0 || email.length == 0 || password.length == 0) {
                setMessage("Empty field not allowed");
                return;
            }
            const userData = { name: name, email: email, password: password };
            axios.post('/users', userData).then((res) => {
                console.log(res);
                if(res.data.error) {
                    setMessage('Email-id already registered');
                    return;
                } else {
                    history.push('/');
                }
            }).catch((err) => {
                setMessage(err.message);
                return;
            })
        } catch (err) {
            setMessage(err.message);
            return;
        }
    }

    return (
        <Container component='div' maxWidth='xs'>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
                    <LockClockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth onClick={handleSignUp}>
                        Sign up
                    </Button>
                    <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3}}>
                        <Grid item>
                            <Link href="/">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                { message.length > 0 
                    ? <Typography variant="h5" component="h5" sx={{mt : 2}}> {message} </Typography>
                    : <p> </p>
                }
            </Box>
        </Container>
    );
}

export default Signup;