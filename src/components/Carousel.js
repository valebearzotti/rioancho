import React, {useState} from 'react'
import styled from 'styled-components'
import Flickity from "react-flickity-component";
import '../styles/styles.css'

function Carousel({slides}) {

    return (
        <Container>
             <Flickity options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              adaptiveHeight: false,
              freeScroll: true,
              contain: true,
              dragThreshold: 10,
              // disable previous & next buttons and dots
              prevNextButtons: false,
              pageDots: false,
              imagesLoaded: true,
              initialIndex: 2
            }}>
                {slides.map((image, index) => (
                    <SlideImage className="carousel-cell" src={image} alt="" />
                ))}
                {slides.map((image, index) => (
                    <SlideImage className="carousel-cell" src={image} alt="" />
                ))}
             </Flickity>
        </Container>
    )
}

const Container = styled.div`
    display: block;
    width: 100%;
    height: 400px;
    overflow-x: hidden;
    outline: none;
`

const SlideImage = styled.img`
    height: 400px;
    padding-left: 10px;
    padding-right: 10px;
`

export default Carousel
