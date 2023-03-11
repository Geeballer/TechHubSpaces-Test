import { Box } from '@mui/material'

import NavBar from './NavBar'
import Banner from './Banner'
import GridSection from './Grid'

const Layout = () => {
  return (
    <Box position='relative' sx={{marginLeft: {sm: '0'}}} style={{overflow: 'hidden', width: '100%'}}>
        <NavBar />
        <Banner />
        <GridSection />
    </Box>
  )
}

export default Layout