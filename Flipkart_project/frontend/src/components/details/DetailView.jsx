import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../redux/actions/productActions.js';
import { Box, Typography } from '@mui/material';
import ActionItems from './ActionItems.jsx';

function DetailView() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const {product, loading} = useSelector(state => state.getProductDetail)

    useEffect(()=> {
        dispatch(getProductDetail(id));
    },[dispatch, id, loading, product])


  return (
    <Box>
        {
        loading && product && Object.keys(product).length &&
        <Box>
            <Box>
              <ActionItems product={product}/>
            </Box>
            <Box>
              <Typography>{product.title.longTitle}</Typography>
            </Box>
        </Box>
        }
    </Box>
  )
}

export default DetailView;
