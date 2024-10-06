import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { getProducts } from '../../redux/actions/productActions.js'
import { useDispatch, useSelector } from "react-redux"
import Slide from './Slide'
import MidSlide from './MidSlide.jsx'
import MidSection from './MidSection.jsx'


const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`


export default function Home() {
  
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.getProducts);

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])

  return (
    <Box>
      <NavBar/>
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Suggested Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's top picks" timer={false}/>
        <Slide products={products} title="Top Deals on Accessories" timer={false}/>
      </Component>
    </Box>
  )
}
