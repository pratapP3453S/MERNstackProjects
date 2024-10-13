import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../redux/actions/productActions.js';
import { Box, Grid, Grid2, styled, Typography } from '@mui/material';
import ActionItems from './ActionItems.jsx';
import ProductDetails from './ProductDetails.jsx';

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55x;
`
const Container = styled(Grid)(({ theme }) => ({
  background: '#ffffff',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    margin: 0,
  }
}))

const RightContainer = styled(Grid)`
   margin-top: 50px;
`

function DetailView() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetail)

    useEffect(()=> {
      if (product && id !== product.id){
        dispatch(getProductDetail(id));
      }
    },[dispatch, id, loading, product])

  console.log(product);
  return (
    <Component>
        {
        product && Object.keys(product).length &&
        <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItems product={product}/>
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
               <ProductDetails product={product}/>
            </RightContainer>
        </Container>
        }
    </Component>
  )
}

export default DetailView;
