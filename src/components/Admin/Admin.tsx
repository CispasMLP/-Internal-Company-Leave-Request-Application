import { Button, Grid, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../Navbar/Header'
import SignUp from './signUp/SignUp';
import { useContext, useState } from 'react';
import TableContext from '../Context/UserContext';
import MessageContext from '../Context/MessageContext';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Navbar/Footer';



const Admin = () => {
  const { tableData } = useContext(TableContext);
  const { setMessage } = useContext(MessageContext);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const accept  = () => {
    setMessage('Accepted');
    setButtonDisabled(true);
  
  };

  const deny = () => {
    setMessage('Denied');
    setButtonDisabled(true);
  
  };


  return (
    <div>
      <Grid container direction="column" minHeight="100vh">
      <Grid item xs>
      <Grid container item xs={12}>

      <Grid item xs={12}>
            <Header
            name='ADMINSTRATOR'
            link="/signup"
            lname='Create New User'
            />
        </Grid>

      <Grid item xs={12}>
       <Grid item>
          <Typography><h1>LEAVE REQUESTS</h1></Typography>
        </Grid>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FIRSTNAME</TableCell>
            <TableCell>LASTNAME</TableCell>
            <TableCell>START-DATE</TableCell>
            <TableCell>END-DATE</TableCell>
            <TableCell>ACCEPT</TableCell>
            <TableCell>DENY</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {tableData.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data.firstName}</TableCell>
            <TableCell>{data.lastName}</TableCell>
            <TableCell>{data.startDate}</TableCell>
            <TableCell>{data.endDate}</TableCell>

           <TableCell><Button 
            variant="contained" 
            color="success"
            onClick={accept }
            disabled={buttonDisabled}
            disableFocusRipple disableTouchRipple
            >Accept</Button></TableCell> 

           <TableCell><Button 
            variant="contained" 
            color="error"
            onClick={deny}
            >Deny</Button></TableCell> 

          </TableRow>
        ))}

        </TableBody>
      </Table>
    </TableContainer>
  </Grid>

</Grid>

</Grid>
<Grid item>
   <Footer/>
  </Grid>
</Grid>
    </div>
  )
}

export default Admin

