import React, {useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/styles.css'

function Carousel({slides}) {

    return (
        <Container>
             <Slider>
                {slides.map((slide, index) => <div key={index}>
                    <SlideImage src={slide}></SlideImage>
                </div>)}
            </Slider>
        </Container>
    )
}

const Container = styled.div`
`

const SlideImage = styled.img`
    width: auto;
    height: 100%;
    display: flex;
    margin-right: auto;
    margin-left: auto;
`

export default Carousel
