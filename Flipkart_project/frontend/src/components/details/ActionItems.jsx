import React, { useState } from 'react';
import {Box, Button, styled, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions.js';
import { payUsingPaytm } from '../../service/api.js';
import { post } from '../../utils/paytm.js';



const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px',
  }
}))


const Image = styled('img')({
  padding: '15px',
})
const StyledButton = styled(Button)(({ theme }) => ({
  width: '48.3%',
  height: '50px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')]:{
    width: '46%',
  },
  [theme.breakpoints.down('sm')]:{
    width: '48.3%'
  }
}))


function ActionItems({ product }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
    navigate('/cart');
  }
  const buyNow = () => {
    let response = payUsingPaytm({amount: 500, email: 'codeforinterview@gmail.com'});
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response,
    }
    post(information)
  }

  return (
    <LeftContainer>
      <Box style={{  padding: '15px 20px',
  border: '1px solid #f0f0f0', width: '90%'}}>
      <Image src={product.detailUrl} alt="product_image" />
      </Box>
      <StyledButton variant='contained' style={{marginRight: 10, background: '#ff9f00' }} 
      onClick={addItemToCart}
      >
        <ShoppingCartIcon />
        Add to Cart
        </StyledButton>
      <StyledButton variant='contained' style={{background: '#fb541b'}} onClick={buyNow}>
        <FlashOnIcon />
        Buy Now
        </StyledButton>
    </LeftContainer>     
  )
}

export default ActionItems;
