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
import { useContext } from 'react';
import TableContext from '../Context/UserContext';
import MessageContext from '../Context/MessageContext';


const Admin = () => {
  const { tableData } = useContext(TableContext);
  const { setMessage } = useContext(MessageContext);


  const handleClick1 = () => {
    setMessage('Accepted');
  };
  const handleClick2 = () => {
    setMessage('Dennied');
  };

  return (
    <div>
      <Grid container item xs={12}>

      <Grid item xs={12}>
            <Header
            name='ADMINSTRATOR'
            />
        </Grid>


     <Grid item xs={6}>
        <SignUp/>
      </Grid>

      <Grid item xs={5}>
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
            <TableCell>FEEDBACK</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {tableData.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data.firstName}</TableCell>
            <TableCell>{data.lastName}</TableCell>
            <TableCell>{data.startDate}</TableCell>
            <TableCell>{data.endDate}</TableCell>

            <Button 
            variant="contained" 
            color="success"
            onClick={handleClick1}
            >Accept</Button>

            <Button 
            variant="contained" 
            color="error"
            onClick={handleClick2}
            >Deny</Button>
          </TableRow>
        ))}

        </TableBody>
      </Table>
    </TableContainer>
  </Grid>

      </Grid>
    </div>
  )
}

export default Admin

