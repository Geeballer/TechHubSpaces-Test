import { Avatar, Container, Typography, Box } from '@mui/material'
import { useState, useEffect } from 'react'

import Popup from './Popup'

const Banner = () => {

  const [message, setMessage] = useState(false)

  useEffect( () => {
    setTimeout( () => {
      setMessage(true)
    }, 6000)
  }, [])

  return (
    <Container sx={{height:{xs: '30vh', sm: '70vh'}}} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
      {message && <Popup closeMessage={setMessage}/>}
      <Box sx={{ display: {xs: 'none', sm: 'flex'}, height:{ sm: '73vh'}, width:'100%', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign: 'center'}} >
        <Typography variant='h2' fontSize='3rem' marginBottom='2rem' fontWeight='700' fontFamily= "'Montserrat', sans-serif">
          All-in-one Blockchain <span>Analytics</span> & <span>Due Dilligence</span> <br /> Dashboard.
        </Typography>
        <Typography variant='h5' fontSize= '1.5rem' marginBottom='2rem' fontFamily= "'Open Sans', sans-serif">
          Metadapp has custom dashboards for DEX Trading, NFT's, Tansaction Analysis, Scam checks & <br /> Portfolio management.
        </Typography>
        <Box width= '45%' display= 'flex' justifyContent= 'space-between' alignItems='center'>
          <Box display= 'flex' justifyContent= 'space-between' alignItems= 'center' width= '50%'>
            <Typography variant='h6' fontFamily= "'Open Sans' sans-serif" fontWeight= '400' fontSize= '1rem'>
              Blockchain supported:
            </Typography>
            <Avatar src="https://metadapp.com/img/ethereum.png" alt="Ethereum" style={{width: '2.5rem', height: '2.5rem'}}/>
              <Avatar src="https://metadapp.com/img/polygon.png" alt="Polygon" style={{width: '2.5rem', height: '2.5rem'}}/>
              <Avatar src="https://metadapp.com/img/binance.png" alt="Binance" style={{width: '2.5rem', height: '2.5rem'}}/>
          </Box>
          <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '40%'}}>
            <Typography variant='h6' style={{fontFamily: "'Open Sans', sans-serif", fontWeight: '400', fontSize: '1rem'}}>
              Coming soon:
            </Typography>
            <Avatar src="https://metadapp.com/img/avalanche.png" alt="Avalanche" style={{width: '2.5rem', height: '2.5rem'}}/>
              <Avatar src="https://metadapp.com/img/solana.png" alt="Solana" style={{width: '2.5rem', height: '2.5rem'}}/>
              <Avatar src="https://metadapp.com/img/fantom.png" alt="Fantom" style={{width: '2.5rem', height: '2.5rem'}}/>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: {xs: 'flex', sm: 'none'} }} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '28vh'}}>
        <Typography variant='h4' style={{fonSize: '3rem',fontWeight: '700', fontFamily: "'Montserrat', sans-serif", textAlign: 'center'}}>
          All in one <br /><span style={{color: '#1463f7'}}> Web3 platform </span>
        </Typography>
      </Box>
    </Container>
  )
}

export default Banner
