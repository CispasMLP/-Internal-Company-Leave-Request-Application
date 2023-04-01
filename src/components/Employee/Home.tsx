import {  Grid } from '@material-ui/core'
import {Button,Container, Snackbar, SnackbarContent, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import MessageContext from '../Context/MessageContext';
import TableContext from '../Context/UserContext';
import Header from '../Navbar/Header';
import DateTimePicker from './DateTimePicker';
import EtextField from './EtextField';
import FeedBackTable from './FeedBackTable';
import { Alert } from '@material-ui/lab';
import DateInput from './DateInput';



const Home = () => {

    //Date Calculations
    const ANNUAL_LEAVE_DAYS = 30;
    
    const [cstartDate, setCStartDate] = useState<Date | null>(null);
    const [cendDate, setCEndDate] = useState<Date | null>(null);
    const [remainingDays, setRemainingDays] = useState<number>(ANNUAL_LEAVE_DAYS);
    const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  
    const handleStartDateChange = (event:any) => {
      const date = new Date(event.target.value);
      setCStartDate(date);
    };
  
    const handleEndDateChange = (event:any) => {
      const date = new Date(event.target.value);
      setCEndDate(date);
    };
  
    const handleNotificationClose = () => {
      setNotificationOpen(false);
    };

    //Table context api

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    
    const { tableActions} = useContext(TableContext);

    //Yup validation
    
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
     // formik,table context and data calculations
     
    const onSubmit=(values:any,formikHelpers:any)=>{
            console.log(values)
            formikHelpers.resetForm();

            tableActions.addTableData(values);
            setFirstName("");
            setLastName("");
            setStartDate("");
            setEndDate("")

            if (cstartDate && cendDate) {
                const diffTime = Math.abs(cendDate.getTime() - cstartDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                const newRemainingDays = remainingDays - diffDays;
                if (newRemainingDays < 0) {
                  setNotificationOpen(true);
                } else {
                  setRemainingDays(newRemainingDays);
                  setCStartDate(null);
                  setCEndDate(null);
                }
              }
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

      <Grid container justify="flex-end">
         <Grid item >
            <FeedBackTable/>
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
                                />
                                 
                            </Grid>

                            <Grid item xs={6}>
                                <DateTimePicker
                                name="startDate"
                                label="Startdate"
                                value={cstartDate ? cstartDate.toISOString().substr(0, 10) : ''}
                                onChange={handleStartDateChange}
                                />
                            </Grid>


                            <Grid item xs={6}>
                                <DateTimePicker
                                name="endDate"
                                label="Endate"
                                value={cendDate ? cendDate.toISOString().substr(0, 10) : ''}
                                onChange={handleEndDateChange}
                                />
                            </Grid>

                            <Grid item xs={6}>
                               <EtextField
                                name="message"
                                label="Reasons for the leave"
                                multiline={true}
                                rows={4}
                                />
                            </Grid>

                            

                            <Grid item xs={12}>
                              <Button type='submit' variant='contained' fullWidth sx={{margin:'30px auto'}}>
                              Request Leave
                             </Button>

                             <p>Remaining Days of Leave: {remainingDays}</p>
                             <Snackbar
                             open={notificationOpen}
                             autoHideDuration={6000}
                             onClose={handleNotificationClose}
                             message="You do not have enough remaining leave days"
                              />
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
