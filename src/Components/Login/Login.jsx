import { useContext, useEffect, useState } from "react";
import { Avatar, Container, Box, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { LockClockOutlined } from "@mui/icons-material";
import { useHistory } from "react-router";
import { AuthContext } from "../../Context/Auth/AuthContext";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    let {login, isAuthenticated} = useContext(AuthContext);


    useEffect(() => {
        if(isAuthenticated)
            history.push('/');
    }, [isAuthenticated, login]);

    const handleLogin = async (e) => {
        e.preventDefault();
        await login({email, password});
    }

    return (
        <Container component='div' maxWidth='xs'>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
                    <LockClockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
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
                    <Button variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth onSubmit={handleLogin}>
                        Sign up
                    </Button>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
                        <Grid item>
                            <Link href="/signup">
                                Dont have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                {message.length > 0
                    ? <Typography variant="h5" component="h5" sx={{ mt: 2 }}> {message} </Typography>
                    : <p> </p>
                }
            </Box>
        </Container>
    );
}

export default Signup;