import React from 'react'

import CarouselItem from './PortfoliolItem'

const CarouselList = () => {
  const carousel = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {carousel.map((item) => (
        <CarouselItem imagen="img" key={item} />
      ))}
    </>
  )
}
export default CarouselList
