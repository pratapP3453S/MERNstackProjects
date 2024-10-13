import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { addEllipsis } from '../../utils/common-utils.js';
import GroupedButton from './ButtonGroup.jsx';
import {removeFromCart} from '../../redux/actions/cartActions.js'
import { useDispatch } from 'react-redux';


const Component = styled(Box)`
   border-top: 1px solid #f0f0f0;
   display: flex;
   background: #fff;
`
const LeftComponent = styled(Box)`
   margin: 20px;
   display: flex;
   flex-direction: column;
`
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const SmallText = styled(Typography)`
   color: #878787;
   font-size: 14px;
   marign-top: 10px;
`
const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`

function CartItem({ item }) {

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Component>
      <LeftComponent style={{ height: 110, width: 110}}>
        <img src={item.url} alt="product_image" />
        <GroupedButton />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>Seller:RetailNet
          <Box component='span'><img src={fassured} alt="fassured" style={{width: 50, marginLeft: 10}}/></Box>
        </SmallText>
        <Typography style={{margin: '20px 0'}}>
                <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388e3c' }}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={() => handleRemoveItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  )
}

export default CartItem
