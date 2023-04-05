import {  Grid } from '@material-ui/core'
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import TableContext from '../Context/UserContext';
import Header from '../Navbar/Header';
import EtextField from './EtextField';
import FeedBackTable from './FeedBackTable';
import Footer from '../Navbar/Footer';


import ExitToAppIcon from '@mui/icons-material/ExitToApp';


interface Alert {
  message: string;
  type: 'success' | 'error'; // specify the type of the 'type' property
}


const Home = () => {

    //Date Calculations
    const [remainingDays, setRemainingDays] = useState(30);
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('')

    const [alerts, setAlerts] = useState<Alert[]>([]);


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
     // formik,table context and date calculations
     
    const onSubmit=(values:any,formikHelpers:any)=>{
            console.log(values)
            formikHelpers.resetForm();

            tableActions.addTableData(values);
            setFirstName("");
            setLastName("");
            setStartDate("");
            setEndDate("")

            //date

            const startDate = new Date(values.startDate);
            const endDate = new Date(values.endDate);
            const daysDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) + 1;
            const newRemainingDays = remainingDays - daysDiff;
        
            if (newRemainingDays < 0) {
              const message = 'You do not have enough remaining annual leave days.';
              const alert: Alert = { message, type: 'error' }; // specify the type of the 'alert' variable
              setAlerts([...alerts, alert]);
              return;
            }
        
            setRemainingDays(newRemainingDays);
            const message = `You have ${newRemainingDays} days of annual leave remaining.`;
            const alert: Alert = { message, type: 'success' }; // specify the type of the 'alert' variable
            setAlerts([...alerts, alert]);
          };
        

  return ( 
    <div>
     
        <Grid item xs={12}>
            <Header
            name='EMPLOYEE'
            icon={<ExitToAppIcon />}
            />
        </Grid>
      <Grid container justifyContent="flex-start"  spacing={4} >
        <Grid item xs={6}>
                <Formik  initialValues={iniatialValues} validationSchema={validateYupSchema} onSubmit={onSubmit}>
                {({ values, handleChange, handleBlur }) => (
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
                            <Field
                             name="startDate"
                                as={TextField}
                                label="Start Date"
                                type="date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.startDate}
                                variant= 'outlined'
                                fullWidth= "true"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  max: values.endDate,
                                }}
                              />
                            </Grid>


                            <Grid item xs={6}>
                            <Field
                                name="endDate"
                                as={TextField}
                                label="End Date"
                                type="date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.endDate}
                                variant= 'outlined'
                                fullWidth= "true"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  min: values.startDate,
                                }}
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
                              
                            </Grid>

                        </Grid>
                    </Form>
                      )}
                </Formik>

        </Grid>
         <Grid item xs={5} justify="flex-end">
          <FeedBackTable/>

          <Grid>
            
              <Typography><h1>DAYS CALCULATIONS</h1></Typography>
            
                <Grid container justify="center" alignItems="center">
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>MESSAGE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {alerts.map((alert, index) => (
                        <TableRow key={index}>
                          <TableCell>{alert.message}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
                </Grid>
         </Grid>
      </Grid>

      <Grid container style={{ position: 'fixed', bottom: 0, width: '100%' }} alignItems="center" justify="center">
       <Grid item xs={12}>
         <Footer/>
       </Grid>
      </Grid>
     
    </div>
  )
  }

export default Home
