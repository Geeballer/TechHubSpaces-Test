import { Container, Typography, Grid, Paper, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined'

const GridSection = () => {

  return (
    <Container sx={{marginBottom: {xs: '1rem', sm: '5rem'}, padding: {sm: '0 3%'}}} style={{width: '100%', height:'auto'}}>
      <Typography variant='h5' sx={{fontFamily: "'Open Sans', sans-serif", marginBottom: {xs: '1rem', sm: '4rem'}, fontSize: {xs: '1.2rem', sm: '2.5rem'}, fontWeight:'400', textAlign: {xs: 'center', sm: 'initial'}}}> Explore our dashboards </Typography>
      <Grid container spacing={[2, 5]}>
        
        <Grid item xs={12} sm={8}>
          <Link to='/construction'>
            <Paper sx={{height: {xs: '17vh', sm: '45vh'}, background: '#1A1919', color: '#fff', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: {xs: '0 5%', sm: '0 12%'}}}>
              <Box sx={{width: {xs: '3rem', sm: '5rem'}, height: {xs: '3rem', sm: '5rem'}, borderRadius: {xs: 'none', sm: '50%'}, background: {xs: '#1E1E1E', sm: 'rgb(253, 193, 14)'}, marginBottom: {xs: '1.5rem', sm: '2rem'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CandlestickChartOutlinedIcon sx={{color: {xs: '#1463f7', sm: '#000'}, fontSize: {xs: '2rem', sm: '3rem'}}}/>
              </Box>
              <Typography variant='h4' sx={{fontSize: {xs: '1.2rem', sm: '1.7rem'}, fontWeight: {xs: '600', sm: '500'}, marginBottom: {xs: '1rem', sm: '2rem'}, fontFamily: "'Open Sans', sans-serif"}}> Tradeviewer </Typography>
              <Typography variant='h6' sx={{fontFamily: "'Open Sans', sans-serif", marginBottom: '2rem', display: {xs: 'none', sm: 'block'}}}> Perform technical price analysis & swaps on any  token pair across multiple DEXE's, track live trading activities of smart money investors. </Typography>
              <Typography variant='h6' sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'none', sm: 'block'}, fontSize:{sm: '1.2rem'}}}> Direct Link <br /> 
                <Link to='/construction' style={{color:'#1463f7'}}> metadapp.com/tradeviewer</Link>
              </Typography>
              <Typography variant='h6' component='div' sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'block', sm: 'none'}, fontSize: '1rem', color: '#777'}}>
                Perform technical price analysis
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4}>  
          <Link to='/construction'>
            <Paper sx={{height: {xs: '17vh', sm: '45vh'}, background: '#1A1919', color: '#fff', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: {xs: '0 5%', sm: '0 12%'}}}>
              <Box sx={{width: {xs: '3rem', sm: '5rem'}, height: {xs: '3rem', sm: '5rem'}, borderRadius: {xs: 'none', sm: '50%'}, background: {xs: '#1E1E1E', sm: 'rgb(253, 193, 14)'}, marginBottom: {xs: '1.5rem', sm: '2rem'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <CandlestickChartOutlinedIcon sx={{color: {xs: '#1463f7', sm: '#000'}, fontSize: {xs: '2rem', sm: '3rem'}}}/>
              </Box>
              <Typography variant='h5' sx={{fontSize: {xs: '1.2rem', sm: '1.7rem'}, fontWeight: {xs: '600', sm: '500'}, marginBottom: {xs: '1rem', sm: '2rem'}, fontFamily: "'Open Sans', sans-serif"}}> NFT Tools </Typography>
              <Typography variant='h6' sx={{fontFamily: "'Open Sans', sans-serif", marginBottom: '2rem', display: {xs: 'none', sm: 'block'}}}> View rarity rankings, snipe, bid, buy & sell Nfts on other marketplaces. </Typography>
              <Typography sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'none', sm: 'block'}, fontSize: {sm: '1.2rem'}}}> Direct Link <br /> 
                <Link to='/construction' style={{color:'#1463f7'}}> metadapp.com/nft</Link>
              </Typography>
              <Typography variant='h6' component='div' sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'block', sm: 'none'}, fontSize: '1rem', color: '#777'}}>
                View rarity rankings, snipe, bid, buy & sell
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Link to='/construction'>
            <Paper sx={{height: {xs: '17vh', sm: '45vh'}, background: '#1A1919', color: '#fff', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: {xs: '0 12%', sm: '0 10%'}}}>
              <Box sx={{width: {xs: '3rem', sm: '5rem'}, height: {xs: '3rem', sm: '5rem'}, borderRadius: {xs: 'none', sm: '50%'}, background: {xs: '#1E1E1E', sm: 'rgb(253, 193, 14)'}, marginBottom: {xs: '1.5rem', sm: '2rem'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <NotificationsNoneOutlinedIcon sx={{color: {xs: '#1463f7', sm: '#000'}, fontSize: {xs: '2rem', sm: '3rem'}}}/>
              </Box>
              <Typography variant='h5' sx={{fontSize: {xs: '1.2rem', sm: '1.7rem'}, fontWeight: {xs: '600', sm: '500'}, marginBottom: {xs: '1rem', sm: '2rem'}, fontFamily: "'Open Sans', sans-serif"}}> Smart Alerts </Typography>
              <Typography variant='h6' sx={{fontFamily: "'Open Sans', sans-serif", marginBottom: '2rem', display: {xs: 'none', sm: 'block'}}}> Monitor on-chain activities on any blockchain protocol or smart contract. </Typography>
              <Typography sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'none', sm: 'block'}, fontSize: {sm: '1.2rem'}}}> Direct Link <br /> 
                <Link to='/construction' style={{color:'#1463f7'}}> metadapp.com/alerts</Link>
              </Typography>
              <Typography variant='h6' component='div' sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'block', sm: 'none'}, fontSize: '1rem', color: '#777'}}>
                Monitor on-chain activities
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Link to='/construction'>
            <Paper sx={{height: {xs: '17vh', sm: '45vh'}, background: '#1A1919', color: '#fff', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: {xs: '0 12%', sm: '0 12%'}}}>
              <Box sx={{width: {xs: '3rem', sm: '5rem'}, height: {xs: '3rem', sm: '5rem'}, borderRadius: {xs: 'none', sm: '50%'}, background: {xs: '#1E1E1E', sm: 'rgb(253, 193, 14)'}, marginBottom: {xs: '1.5rem', sm: '2rem'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <WorkOutlineOutlinedIcon sx={{color: {xs: '#1463f7', sm: '#000'}, fontSize: {xs: '2rem', sm: '3rem'}}}/>
              </Box>
              <Typography variant='h5' sx={{fontSize: {xs: '1.2rem', sm: '1.7rem'}, fontWeight: {xs: '600', sm: '500'}, marginBottom: {xs: '1rem', sm: '2rem'}, fontFamily: "'Open Sans', sans-serif"}}> Portfolio Managements </Typography>
              <Typography variant='h6' sx={{fontFamily: "'Open Sans', sans-serif", marginBottom: '2rem', display: {xs: 'none', sm: 'block'}}}> Track all your Asset holdings, View CEX proof of reserves. </Typography>
              <Typography sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'none', sm: 'block'}, fontSize: {sm: '1.2rem'}}}> Direct Link <br /> 
                <Link to='/construction' style={{color:'#1463f7'}}> metadapp.com/portfolio</Link>
              </Typography>
              <Typography variant='h6' component='div' sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'block', sm: 'none'}, fontSize: '1rem', color: '#777'}}>
                Track all your assets
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Link to='/construction'>
            <Paper sx={{height: {xs: '17vh', sm: '45vh'}, background: '#1A1919', color: '#fff', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: {xs: '0 5%', sm: '0 12%'}}}>
              <Box sx={{width: {xs: '3rem', sm: '5rem'}, height: {xs: '3rem', sm: '5rem'}, borderRadius: {xs: 'none', sm: '50%'}, background: {xs: '#1E1E1E', sm: 'rgb(253, 193, 14)'}, marginBottom: {xs: '1.5rem', sm: '2rem'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <ShieldOutlinedIcon sx={{color: {xs: '#1463f7', sm: '#000'}, fontSize: {xs: '2rem', sm: '3rem'}}}/>
                </Box>
              <Typography variant='h5' sx={{fontSize: {xs: '1.2rem', sm: '1.7rem'}, fontWeight: {xs: '600', sm: '500'}, marginBottom: {xs: '1rem', sm: '2rem'}, fontFamily: "'Open Sans', sans-serif"}}> Due Dilligence Tools </Typography>
              <Typography variant='h6' sx={{fontFamily: "'Open Sans', sans-serif", marginBottom: '2rem', display: {xs: 'none', sm: 'block'}}}> Protect yourself from bad actors by using our tools to instantly detect scams. </Typography>
              <Typography sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'none', sm: 'block'}, fontSize: {sm: '1.2rem'}}}> Direct Link <br /> 
                <Link to='/construction' style={{color:'#1463f7'}}> metadapp.com/duedilligence</Link>
              </Typography>
              <Typography variant='h6' component='div' sx={{fontFamily: "'Open Sans', sans-serif", display: {xs: 'block', sm: 'none'}, fontSize: '1rem', color: '#777'}}>
                Protect yourself from bad actors
              </Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GridSection