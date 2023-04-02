
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { logOut } from '../Authentication/services/Auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Header = (props:any) => {
  const navigate = useNavigate();

  const logout=()=>{
    logOut(navigate);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 80 }}>
          {props.name}
        </Typography>
        <Link to={props.link} style={{ textDecoration: 'none', color: 'white',flexGrow: 1 }}>
           {props.lname}
        </Link>
        <Button variant='outlined' style={{color:'red'}} onClick={logout}><ExitToAppIcon/></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header
