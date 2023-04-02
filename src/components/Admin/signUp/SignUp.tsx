import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUp } from '../../Authentication/services/Auth';
import Header from '../../Navbar/Header';
import Footer from '../../Navbar/Footer';



const theme = createTheme();

export default function SignUp() {
    const navigate= useNavigate();
    const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formRef.current?.reset();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    
    });

    //firebase
    signUp(navigate,data.get('email'),data.get('password'));
    
  };

  return (

    <Grid container direction="column" minHeight="100vh">
      <Grid item xs>
 
    <ThemeProvider theme={theme}>  
          <Grid item xs={12}>
            <Header
            name='ADMINSTRATOR'
            link="/admin"
            lname='View Requests'
            />
        </Grid>
      <Container component="main" maxWidth="xs">
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Typography >
            {/* Sign up */}
            <h1>CREATE A NEW USER</h1>
          </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
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
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
      </Container>
    
    </ThemeProvider>
    </Grid>

    <Grid item>
    <Footer/>
  </Grid>

    </Grid>
  );
}