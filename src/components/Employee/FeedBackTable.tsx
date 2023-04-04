import { Grid,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import  { useContext } from 'react'
import MessageContext from '../Context/MessageContext';
import TableContext from '../Context/UserContext';



const FeedBackTable = () => {
    
    const { tableData} = useContext(TableContext);
    const { message ,setMessage} = useContext(MessageContext);
    console.log(message)



  return (
    <Grid item xs={12} justifyContent="flex-end">
    <Grid item>
       <Typography><h1>RENSPONCE</h1></Typography>
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
         <TableCell>{message}</TableCell>
       </TableRow>
     ))}

     </TableBody>
   </Table>
 </TableContainer>
</Grid>
  )
}

export default FeedBackTable
