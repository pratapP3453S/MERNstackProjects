import { Box, styled } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'


const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`


export default function Home() {
  return (
    <Box sx={{marginTop: '54px'}}>
      <NavBar/>
      <Component>
        <Banner />
      </Component>
    </Box>
  )
}
