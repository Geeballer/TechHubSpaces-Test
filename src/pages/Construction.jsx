import { Container, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Construction = () => {
  return (
    <Container style={{width:'100%', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Box style={{width: 'auto'}}>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/civil-engineer-looking-for-building-plan-6441368-5324687.png" alt="Construction Site Illustration" style={{width: '100%', height: 'auto'}}/>
      </Box>
      <Typography sx={{fontSize: {xs: '1.3rem', sm: '1.7rem'}, textAlign: 'center', fontFamily: "'Open Sans' sans-serif"}}>
          This page is currently being managed, kindly checkback. <Link to='/' style={{color: '#777'}}> Visit Homepage </Link>
      </Typography>
    </Container>
  )
}

export default Construction