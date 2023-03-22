import React from 'react'
import {Avatar, Button, Grid, Paper, TextField} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
 import { Form, Formik,Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Sample from './Sample';

const Login = () => {

    const initialValues={
        email:'',
        password:''
    }

    const validateYupSchema= Yup.object().shape({
       username: Yup.string().email('Invalid email').required('Required'),
       password: Yup.string().required('Required')
    })

    const onSubmit=(values:any,props:any)=>{
        console.log(values);

    }

    const paperStyle={
        padding:20,
        height:'40vh',
        width:300,
        margin:'30px auto'
    }
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid>
            <Avatar><LockIcon/></Avatar>
            <h2>Sign In</h2>
            </Grid>

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateYupSchema}>
                {(props)=>(
                    <Form>
                      <Field as={TextField} name='username' 
                      label ='Username'
                      variant='standard'
                      placeholder='Enter username'
                      helperText={<ErrorMessage name='username'/>} 
                      fullWidth/>

                      <Field as={TextField}  
                      name='password' 
                      label ='Password'
                      variant='standard' 
                      fullWidth type='password'
                      helperText={<ErrorMessage name='password'/>} 
                      sx={{margin:'20px auto'}}/>
{/* 
                      <Sample
                      name='password' 
                      label ='Password'
                      variant='standard' 
                      /> */}

                      <Button type='submit' variant='contained' fullWidth sx={{margin:'30px auto'}}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </Paper>
      </Grid>
    </div>
  )
}
export default Login
