import { Grid, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../Header'

const Admin = () => {
  function createData(name:string, lastname:string) {
    return { name,lastname};
  }
  
  const rows = [
    createData('Crispas', 'Makanani'),

  ];
  return (
    <div>
      <Grid container>
      <Grid item xs={12}>
            <Header
            name='ADMINSTRATOR'
            />
        </Grid>
        <Grid item xs={7}>
          <Typography><h1>LEAVE REQUESTS</h1></Typography>
        </Grid>

      <Grid item xs={6}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FIRSTNAME</TableCell>
            <TableCell align="right">LASTNAME</TableCell>
            <TableCell align="right">FEEDBACK</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
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
