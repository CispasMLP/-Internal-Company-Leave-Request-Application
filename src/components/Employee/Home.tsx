import {  Grid } from '@material-ui/core'
import { Button,Container, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import Header from '../Header';
import DateTimePicker from './DateTimePicker';
import EtextField from './EtextField';

const Home = () => {
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

        let [array,setArray] = useState<any>([]);

        let [inputdata,setInputdata]=useState(
            {
                firstName:"",
                lastName:"",
                startDate:"",
                endDate:'',
                email:'',
                phone:'',
                message:''
            });

        function data(e:any){
            setInputdata({...inputdata,[e.target.name]:e.target.value})
        }

        let{firstName,lastName}=inputdata


        const addInputData=()=>{
            setArray([...array,{firstName,lastName}])
            // console.log(inputdata)
           setInputdata({firstName:"",lastName:"",startDate:"",endDate:'',email:'',phone:'', message:''})
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
                                value={inputdata.firstName || ""}
                                onChange={data}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <EtextField 
                                name='lastName'
                                label='Lastname'
                                value={inputdata.lastName || ""}
                                onChange={data}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <EtextField
                                name='email'
                                label='Email'
                                value={inputdata.email || ""}
                                onChange={data}
                                
                                />
                                 
                            </Grid>

                            <Grid item xs={6}>
                                <EtextField
                                name='phone'
                                label='Phonenumber'
                                value={inputdata.phone|| ""}
                                onChange={data}
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
                                value={inputdata.message|| ""}
                                onChange={data}
                                />
                            </Grid>

                            <Grid item xs={12}>
                              <Button onClick={addInputData} type='submit' variant='contained' fullWidth sx={{margin:'30px auto'}}>
                                Submit 
                             </Button>
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
