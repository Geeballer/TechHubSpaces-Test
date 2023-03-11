import { AppBar, Toolbar, styled, List, ListItem, ListItemText, Box, Badge, Button, Avatar } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative'
})

const NavBar = () => {

  const desktopItems = ['About Us', 'Blog', 'Our Manifesto']

  const mobileItems = ['Home', 'NFT Tools', 'Tradeviewer', 'Smart Alerts', 'Portfolio Management', 'Due Dilligence Tools', 'Referrals & Rewards']

  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppBar sx={{background: '#1E1E1E', position: 'sticky', height: {xs: '9vh'}, top: {sm: '0'}, borderBottom: {xs: 'none', sm: '.5px solid #777'}, padding: {sm: '0 3%'}}}>
      <StyledToolbar sx={{display: {xs: 'flex', sm: 'flex' }, width: {xs: '100%', sm: '100%'}, justifyContent: {xs: 'space-between'}, alignItems: {xs: 'center'}}}>
        <List sx={{display: {xs: 'none', sm: 'flex'}, width: {sm: '30%'}, justifyContent: {sm: 'center'}}}>
          {
            desktopItems.map(desktopItem =>
              <ListItem key={desktopItem} style={{padding: '0'}}>
                <Link to='/construction' style={{color: '#fff'}}>
                <ListItemText primaryTypographyProps={{variant: 'h6', fontSize: '1.3rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}>{desktopItem}</ListItemText>
                </Link>
              </ListItem>
            )
          }
        </List>
        <Link to='/' sx={{display: {xs: 'block', sm: 'none'}}} style={{position: 'absolute', top: '0', left: '1%'}}>
          <Avatar
            src='https://metadapp.com/img/mlogo-beta.png'
            alt='Logo'
            style={{width: '10rem', height: '5rem'}} sx={{display: {xs: 'block', sm: 'none'}}}
          />
        </Link>
         <Button sx={{display: {xs: 'block', sm: 'none'}}} style={{position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)'}} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MenuIcon style={{fontSize: '2.5rem', cursor: 'pointer', color: '#fff'}}/> : <CloseIcon style={{fontSize: '2.5rem', cursor: 'pointer', color: '#fff'}} />}
         </Button>
        <Box>
          <Link to='/construction' style={{color: '#777'}}>
            <Badge cursor='pointer' sx={{display: {xs: 'none', sm: 'inline-block'}}}>
              <NotificationsNoneOutlinedIcon style={{fontSize: '2.5rem'}}/>
            </Badge>
          </Link>
          <List className={`${isOpen && 'open'}`} sx={{display: {xs: 'flex', sm: 'none' }, width: '100%', height: '100vh', top: '9vh', left: '0', background: '#1E1E1E', flexDirection: 'column', position: 'absolute' }}>
          {
            mobileItems.map(mobileItem =>
              <ListItem key={mobileItem}>
                <Link to='/construction' style={{color: '#fff', fontFamily: "'Open Sans', sans-serif"}}>
                <ListItemText primaryTypographyProps={{variant: 'h6', fontSize: '1.5rem', fontWeight: '600', fontFamily: "'Open Sans', sans-serif"}}>{mobileItem}</ListItemText>
                </Link>
              </ListItem>
            )
          }
        </List>

          <Link to='/contstruction'>
          <Button cursor='pointer' color='primary' variant='contained' sx={{display: {xs: 'none', sm: 'inline-block'}}} style={{fontSize: '1.3rem', fontFamily: "'Open Sans', sans-serif", marginLeft: '2rem', textTransform: 'none'}}> Sign In </Button>
          </Link>
        </Box>

        <Box sx={{display: {xs: 'flex', sm: 'none'}}}>

        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar