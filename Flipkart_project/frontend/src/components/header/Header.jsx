import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Typography, styled, IconButton, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';
import CustomButtons from './CustomButtons';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const Component = styled(Link)`
    margin-left: 12%;
    text-decoration: none;
    color: inherit;
`
const PlusImage = styled('img')({
  width: 10,
  height: 10,
  marginLeft: 4
})
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 7% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}))


const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

export default function Header() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
   setOpen(false);
  }
  const list = () => (
    <Box style={{width: 200}} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
      <MenuButton color='inherit' onClick={handleOpen}>
        <MenuIcon />
      </MenuButton>
      <Drawer open={open} onClose={handleClose}>{list()}</Drawer>
        <Component to={`/`}>
          <img src={logoURL} alt='logo' style={{ width: 75 }} />
          <Box style={{ display: 'flex' }}>
            <SubHeading>Explore&nbsp;
              <Box component='span' sx={{ color: 'yellow' }}>Plus</Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  )
}
