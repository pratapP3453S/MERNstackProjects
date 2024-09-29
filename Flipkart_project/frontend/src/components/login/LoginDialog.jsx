import React, { useContext, useState } from 'react'
import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';
import { authenticateLogin, authenticateSignup } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';

const Component = styled(Box)`
  height: 70vh;
  widht: 90vh;
  display: flex;
`
const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  width: 40%;
  padding: 45px 35px;
  & > p , & > h5{
    color: #fff;
    font-weight: 600;
  }
`
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div, & > button, & > p {
    margin-top: 20px
  }
`
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 20px)
`
const CreateAcc = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787
`
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`
const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subheading: "Get access to your Orders, Whislist and Recommendations"
  },
  signup: {
    view: 'signup',
    heading: "Looks like your're new here!",
    subheading: "Sign up with your mobile number to get started"
  }
}
const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
}
const loginInitialValues = {
  username: '',
  password: '',
}

const LoginDialog = ({ open, setOpen }) => {

  const [account, toggleAccount] = useState(accountInitialValues.login)
  const [signup, setSignup] = useState(signupInitialValues)
  const [login, setLogin] = useState(loginInitialValues)
  const [error, setError] = useState(false);

  const { setLoggedAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup)
  }
  const handleLoginClose = () => {
    setOpen(false)
    toggleAccount(accountInitialValues.login)
    setError(false)
  }
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }
  const signupUser = async () => {
    let response = await authenticateSignup(signup)
    if (!response) return;
    setLoggedAccount(signup.firstname)
    handleLoginClose();
  }
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const loginUser = async () => {
    let response = await authenticateLogin(login)
    if (response.status === 200) {
      handleLoginClose();
      setLoggedAccount(response.data.data.firstname)
    }
    else {
      setError(true)
    }

  }

  return (
    <Dialog open={open} onClose={handleLoginClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        {/* <Box style={{display: 'flex', height: '100%'}}> */}
        <Image>
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
        </Image>

        {account.view === 'login' ? <Wrapper>
          <TextField variant='standard' label="Enter Username" onChange={(e) => onValueChange(e)} name='username' />
          {error && <Error>Please enter valid username or password</Error>}
          <TextField variant='standard' label="Enter Password" onChange={(e) => onValueChange(e)} name='password' />
          <Text>By continuing, you agree to Flipkart's Terms and Privacy Policy</Text>
          <LoginButton onClick={loginUser}>Login</LoginButton>
          <Typography style={{ textAlign: 'center' }}>OR</Typography>
          <RequestOTP>Request OTP</RequestOTP>
          <CreateAcc onClick={toggleSignup}>New to Flipkart?Create an account</CreateAcc>
        </Wrapper>
          :
          <Wrapper>
            <TextField variant='standard' name='firstname' onChange={(e) => onInputChange(e)} label="Enter Firstname" />
            <TextField variant='standard' name='lastname' onChange={(e) => onInputChange(e)} label="Enter Lastname" />
            <TextField variant='standard' name='username' onChange={(e) => onInputChange(e)} label="Enter Username" />
            <TextField variant='standard' name='email' onChange={(e) => onInputChange(e)} label="Enter Email" />
            <TextField variant='standard' name='password' onChange={(e) => onInputChange(e)} label="Enter Password" />
            <TextField variant='standard' name='phone' onChange={(e) => onInputChange(e)} label="Enter Phone" />
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </Wrapper>
        }
        {/* </Box> */}
      </Component>
    </Dialog>
  )
}

export default LoginDialog
