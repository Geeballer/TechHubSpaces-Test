import { Box, Typography } from '@mui/material'

const Preloader = () => {
  return (
    <Box style={{height: '100vh', width: '100%', background: '#00000e', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Box style={{position:'relative', borderRadius:'50%', perspective:'50rem'}} sx={{width: {xs: '10rem', sm: '15rem'}, height: {xs: '10rem', sm: '15rem'}}}>
          <Box 
            style={{
            position: 'absolute',
            inset: '0',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            borderBottom:'1rem solid #1463f7', 
            filter:'drop-shadow(0 0 5px #709ff8de)',
            transform:'rotateX(35deg) rotateY(-45deg)',
            animation:'curve1 2s linear infinite'}}
          ></Box>
          <Box 
            style={{
            position: 'absolute',
            inset: '0',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',  
            borderRight:'1rem solid #1463f7', 
            filter:'drop-shadow(0 0 5px #709ff8de)',
            transform:'rotateX(50deg) rotateY(10deg)',
            animation:'curve2 2s linear infinite'}}
          ></Box>
          <Box 
            style={{
            position: 'absolute',
            inset: '0',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',  
            borderTop:'1rem solid #1463f7', 
            filter:'drop-shadow(0 0 5px #709ff8de)',
            transform:'rotateX(35deg) rotateY(55deg)',
            animation:'curve3 2s linear infinite'}}
          ></Box>
        </Box>
        <Typography variant='h6' sx={{fontSize: {xs: '1.4rem', sm: '1.7rem'}, marginTop: '1rem', fontFamily: "'Montserrat', sans-serif"}}>
          All in one Web3 Dashboard.
        </Typography>
    </Box>
  )
}

export default Preloader