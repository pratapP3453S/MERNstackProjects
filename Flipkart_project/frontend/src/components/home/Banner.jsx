import React from 'react'
import Carousel from "react-multi-carousel";
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";


const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('md')]: {
    objectFit: "cover",
    height: 180,
  }
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Banner() {
  return (
    <Carousel responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      infinite={true}
      swipeable={false}
      draggable={false}
      transitionDuration={500}
      autoPlaySpeed={5000}
      autoPlay={true}
      slidesToSlide={1}
    >
      {
        bannerData.map((data) => (
          <Image src={data.url} alt="banner" />
        ))
      }
    </Carousel>
  )
}
