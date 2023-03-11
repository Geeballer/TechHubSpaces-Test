import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Social = () => {
  return (
    <Box sx={{display: {xs: 'none', sm: 'block'}}} style={{position: 'fixed', bottom: '1%', left: '1%', zIndex: '3000'}}>
        <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Link to='https://telegram.com'>
             <TelegramIcon style={{color: '#fff', fontSize: '3rem'}}/>
            </Link>
            <Link to='https://twitter.com'>
                <TwitterIcon style={{color: '#fff', fontSize: '3rem'}}/>
            </Link>
            <Link to='https://instagram.com'>
                <InstagramIcon style={{color: '#fff', fontSize: '3rem'}}/>
            </Link>
            
        </Box>
        <Typography style={{color: '#fff', fontSize: '1.5rem', fontFamily: "'Montserrat', sans-serif", fontWeight: '600'}}> Join Our Community </Typography>
    </Box>
  )
}

export default Social