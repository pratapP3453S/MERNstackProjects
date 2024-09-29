import { Box, Button, styled, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext, useState } from 'react'
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)`
   display: flex;
   margin: 0 3% 0 auto;
   & > button, & > p, & > div {
   margin-right: 40px;
   font-size: 16px;
   align-items: center;
   }
`
const Container = styled(Box)`
  display: flex;
`
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`


export default function CustomButtons() {
  const [open, setOpen] = useState(false)
  const { loggedAccount, setLoggedAccount } = useContext(DataContext);

const handleLoginOpen = () => {
    setOpen(true)
}
  return (
    <Wrapper>
      {
        loggedAccount ? <Profile loggedAccount={loggedAccount} setLoggedAccount={setLoggedAccount}/> :
        <LoginButton variant='contained' onClick={handleLoginOpen}>Login</LoginButton>
      }
       <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
       <Typography style={{ marginTop: 3 }}>More</Typography>
       <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
       </Container>
       <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}
