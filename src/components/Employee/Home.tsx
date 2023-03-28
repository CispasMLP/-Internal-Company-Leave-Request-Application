import {  Grid } from '@material-ui/core'
import { Button,Container, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
// import React, { useContext, useState } from 'react'
import * as Yup from 'yup';
import Header from '../Navbar/Header';
import DateTimePicker from './DateTimePicker';
import EtextField from './EtextField';
// import { TodoContext, TodoContextType } from '../Context/UserContext';

const Home = () => {
    // const {list, addToList}= useContext(TodoContext) as TodoContextType;
    
    // const{finalData,setFinalData}=useContext(TodoContext);
    
    const iniatialValues={
        firstName:'',
        lastName:'',
        startDate:'',
        endDate:'',
        email:'',
        phone:'',
        message:''
    }
    const validateYupSchema= Yup.object().shape({
        firstName: Yup.string()
        .required('Required'),
        lastName:  Yup.string()
        .required('Required'),
        email: Yup.string()
         .email('Invalid email')
         .required('Required'),
        phone: Yup.string()
         .typeError('Please enter a valid phone number')
         .required('Required'),
         startDate:Yup.date().required('Required'),
         endDate:Yup.date().required('Required'),
        message:Yup.string().required('Required')

    })

    const onSubmit=(values:any,formikHelpers:any)=>{
            console.log(values)
            formikHelpers.resetForm();
        }

          

  return ( 
    <div>
      <Grid container>
        <Grid item xs={12}>
            <Header
            name='EMPLOYEE'
            />
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Container>
            <div className=''>
                <Formik  initialValues={iniatialValues} validationSchema={validateYupSchema} onSubmit={onSubmit}>
                    <Form>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Typography>
                                    <h1>REQUEST FOR LEAVE</h1>
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <EtextField
                                name='firstName'
                                label='Firstname'
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <EtextField 
                                name='lastName'
                                label='Lastname'
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <EtextField
                                name='email'
                                label='Email'   
                                />
                                 
                            </Grid>

                            <Grid item xs={6}>
                                <EtextField
                                name='phone'
                                label='Phonenumber'
                                // value={inputdata.phone|| ""}
                                />
                                 
                            </Grid>

                            <Grid item xs={6}>
                                <DateTimePicker
                                name="startDate"
                                label="Startdate"
                                />
                            </Grid>


                            <Grid item xs={6}>
                                <DateTimePicker
                                name="endDate"
                                label="Endate"
                                />
                            </Grid>

                            <Grid item xs={6}>
                               <EtextField
                                name="message"
                                label="Reasons for the leave"
                                multiline={true}
                                rows={4}
                                // value={inputdata.message|| ""}
                                />
                            </Grid>

                            <Grid item xs={12}>
                              <Button  type='submit' variant='contained' fullWidth sx={{margin:'30px auto'}}>
                                Submit 
                             </Button>

                             {/* <button onClick={()=>addToList("Crispas")}>Add To Context</button> */}
                            </Grid>

                        </Grid>
                    </Form>
                </Formik>
            </div>
        </Container>
      </Grid>
    </div>
  )
  }

export default Home
