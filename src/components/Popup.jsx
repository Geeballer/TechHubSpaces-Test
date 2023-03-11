import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Popup = ({closeMessage}) => {

  return (
    <Box sx={{display: 'flex', width: {sx: '90%'}}} style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
        <Link to='/construction'>
          <Typography 
          sx={{width: {xs: '100%', sm: '100%'}, fontSize: {xs: '6.5px', sm: '1.1rem'},padding: {xs: '5px 1rem', sm: '5px 8px'}, marginRight: {xs: '5px', sm: '5px'}, whiteSpace: {xs: 'nowrap'}, overflow: {xs: 'hidden'}, textOverflow: {xs: 'ellipsis'}}} 
          style={{background: 'rgba(29, 212, 81, 0.123)', borderRadius: '1rem', color: '#17cb49', fontWeight: '600', fontFamily: "'Montserrat', sans-serif"}}>
              <span style={{background: '#fff', borderRadius: '1.5rem', color: '#000', padding: '5px 1rem'}}> New </span> &nbsp; 🎉 SIGN IN YOUR WALLET NOW TO GET 25 FREE MAIL ALERTS!
          </Typography>
        </Link>
        <Button onClick={() => {closeMessage(false)}} style={{padding: '0', minWidth: '0'}}>
            <CloseIcon style={{cursor: 'pointer', color: '#fff', fontSize: '2rem'}} />
        </Button>
    </Box>
  )
}

export default Popup