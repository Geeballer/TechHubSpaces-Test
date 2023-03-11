import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Avatar } from "@mui/material"
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined'

import { useState } from "react"

const SideBar = () => {

  const [width, setWidth] = useState('5%')
  const [imageSwitch, setImageSwitch] = useState(false)

  const handleMouseHover = () => {
    setWidth('17%')
    setImageSwitch(true)
  }
  const handleMouseOut = () => {
      setWidth('5%')
      setImageSwitch(false)
  }

  return (
    <Box
      sx={{ display: {xs: 'none', sm: 'block'}}}
      style={{background: '#1A1919', height: '100vh', overflow: 'hidden', position: 'relative', transition: 'width .45s ease-in', width}}>
      <Box style={{background: '#1A1919', height: '100vh', overflow: 'hidden', position: 'fixed', top: '0', left: '0', zIndex: '2000', transition: 'width .45s ease-in', width}} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
        <Link to='/'>
          {imageSwitch ?
          <Avatar
              src='https://metadapp.com/img/mlogo-beta.png'
              alt='Logo'
              style={{width: '18rem', height: 'auto', margin: '2rem 0 3rem 5px'}} 
            /> : 
            <Avatar
              src='https://metadapp.com/img/logo.png'
              alt='Logo'
              style={{width: '5.5rem', height: '5.5rem', margin: '4rem 0 3rem 5px'}} 
            />
          }
        </Link>
        <List style={{marginLeft: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '60vh'}}>
          <ListItem disablePadding onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <Link to='/'>
              <Button style={{display: 'flex', color: '#fff', justifyContent: 'center', alignItems: 'center', textTransform: 'none', padding: '0'}}>
                <ListItemIcon> <HomeOutlinedIcon style={{fontSize: '2.5rem', color: '#fff'}} /> </ListItemIcon>
                <ListItemText primary='Home' primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}} />
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <Link to='/construction'>
              <Button style={{display: 'flex', color: '#777', justifyContent: 'center', alignItems: 'center', textTransform: 'none', padding: '0'}}>
                <ListItemIcon> <CandlestickChartOutlinedIcon style={{fontSize: '2.5rem', color: '#777'}} /> </ListItemIcon>
                <ListItemText primary='NFT Tools' primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}/>
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <Link to='/construction'>
              <Button style={{display: 'flex', color: '#777', justifyContent: 'center', alignItems: 'center', textTransform: 'none', padding: '0'}}>
                <ListItemIcon> <CandlestickChartOutlinedIcon style={{fontSize: '2.5rem', color: '#777'}} /> </ListItemIcon>
                <ListItemText primary='Tradeviewer' primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}/>
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <Link to='/construction'>
              <Button style={{display: 'flex', color: '#777', justifyContent: 'center', alignItems: 'center', textTransform: 'none', padding: '0'}}>
                <ListItemIcon> <NotificationsNoneOutlinedIcon style={{fontSize: '2.5rem', color: '#777'}} /> </ListItemIcon>
                <ListItemText primary='Smart Alerts' primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}/>
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <Link to='/construction'>
              <Button style={{display: 'flex', color: '#777', justifyContent: 'center', alignItems: 'center', textTransform: 'none', padding: '0'}}>
                <ListItemIcon> <WorkOutlineOutlinedIcon style={{fontSize: '2.5rem', color: '#777'}} /> </ListItemIcon>
                <ListItemText primary='Portfolio Management' primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}/>
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <Link to='/construction'>
              <Button style={{display: 'flex', color: '#777', justifyContent: 'center', alignItems: 'center', textTransform: 'none', padding: '0'}}>
                <ListItemIcon> <ShieldOutlinedIcon style={{fontSize: '2.5rem', color: '#777'}} /> </ListItemIcon>
              <ListItemText primary='Due Dilligence Tools' primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}/>
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding onMouseOut={handleMouseOut}>
            <Link to='/construction'>
              <Button style={{display: 'flex', color: '#777', justifyContent: 'center', alignItems: 'center', textTransform: 'none', padding: '0'}}>
                <ListItemIcon> <LocalOfferOutlinedIcon style={{fontSize: '2.5rem', color: '#777'}} /> </ListItemIcon>
                <ListItemText primary='Referrals & Rewards' primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}/>
              </Button>
            </Link>
          </ListItem>
        </List>
        <Typography variant='h6' component='div'>
        </Typography>
      </Box>
    </Box>
  )
}

export default SideBar
