import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import CarouselItem from './CarouselItem'

const CarouselList = () => {
  const carousel = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Carousel
      itemWidth={150}
      slidesPerScroll={4}
      slidesPerPage={4}
      arrows
      dots
      breakpoints={{
        640: {
          slidesPerPage: 1,
          arrows: false,
        },
        1300: {
          slidesPerPage: 2,
          arrows: false,
        },
      }}
    >
      {carousel.map((item) => (
        <CarouselItem imagen="img" key={item} />
      ))}
    </Carousel>
  )
}
export default CarouselList
