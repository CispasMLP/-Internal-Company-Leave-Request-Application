import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme} from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/Auth';
import Header from '../../Navbar/Header';



const theme = createTheme();

export default function SignIn() {
    const navigate= useNavigate();

 //submiting the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    //firebase
    signIn(navigate,data.get('email'),data.get('password'))

  };

  const paperStyle={
    padding:20,
    height:'40vh',
    width:300,
    margin:'30px auto'
}

  return (
        <Grid item xs={12} sm={6}>
            <Header
              name="INTERNAL COMPANY LEAVE REAQUEST APPLICATION"
            />
            <Paper elevation={10} style={paperStyle}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container item xs={12}>
                <Grid item>
                <Link component='button' variant="body2" onClick={()=>navigate('signUp')}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
  );
}