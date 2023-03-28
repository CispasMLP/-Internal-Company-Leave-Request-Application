
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { logOut } from '../Authentication/services/Auth';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


const Header = (props:any) => {
  const navigate = useNavigate();

  const logout=()=>{
    logOut(navigate);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.name}
        </Typography>
        <Button variant='outlined' style={{color:'red'}} onClick={logout}><LogoutIcon/></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header
