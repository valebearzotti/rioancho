import React, {useState} from 'react'
import styled from 'styled-components'
import arrowleft from '../assets/left.svg'
import arrowright from '../assets/right.svg'

function Carousel({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Container>
            <Arrow onClick={prevSlide}><img src={arrowleft}/></Arrow>
            <Arrow onClick={nextSlide}><img src={arrowright}/></Arrow>
            {slides.map((slide, index) => {
                return (
                <div key={index}>
                    {index === current && (
                    <SlideImage src={slide} alt="" />
                    )}
                </div>
                );
            })}
        </Container>
    )
}

const Container = styled.div`
`

const SlideImage = styled.img`
`

const Arrow = styled.div`
`

export default Carousel
