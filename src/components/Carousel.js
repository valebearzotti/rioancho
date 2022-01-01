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
              prevNextButtons: true,
              pageDots: false,
              imagesLoaded: true,
              initialIndex: 1,
              lazyLoad: 1
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
    height: 500px;
    overflow-x: hidden;
    outline: none;
    /* no circle */
    /* .flickity-button {
        background: transparent;
    }
    .flickity-prev-next-button {
        width: 100px;
        height: 100px;
    }
    .flickity-button-icon {
        fill: white;
    }
    .flickity-button:disabled {
        display: none;
    } */
`

const SlideImage = styled.img`
    height: 500px;
    padding-left: 10px;
    padding-right: 10px;
`

export default Carousel
