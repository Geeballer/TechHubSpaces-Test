import { Box, Stack } from '@mui/material'
import { useState, useEffect } from 'react'

import Preloader from '../components/Preloader'
import SideBar from '../components/SideBar'
import Layout from '../components/Layout'
import Social from '../components/Social'


const Home = () => {

  const [preloader, setPreloader] = useState(false)
  
  useEffect( () => {
    setPreloader(true)
    setTimeout( () => {
      setPreloader(false)
    }, 6000)
  }, [])

  

  return (
    <>
      {
        preloader ? <Preloader /> :
        <Box>
          <Stack direction='row' justifyContent='space-between' position='relative'>
            <SideBar/>
            <Layout />
            <Social />
          </Stack>
        </Box>
      }
    </>
  )
}

export default Home