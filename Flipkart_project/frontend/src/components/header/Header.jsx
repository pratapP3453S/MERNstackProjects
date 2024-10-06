import React from 'react'
import {AppBar, Toolbar, Box, Typography, styled} from '@mui/material'
import Search from './Search';
import CustomButtons from './CustomButtons';
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
const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

export default function Header() {
  return (
    <StyledHeader>
      <Toolbar style={{minHeight: 55}}>
        <Component to={`/`}>
          <img src={logoURL} alt='logo' style={{width: 75}}/>
          <Box style={{ display: 'flex' }}>
            <SubHeading>Explore&nbsp;
               <Box component='span' sx={{color: 'yellow'}}>Plus</Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-logo"/>
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
