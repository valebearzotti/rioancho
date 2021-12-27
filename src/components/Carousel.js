import React, {useState} from 'react'
import styled from 'styled-components'
import arrowleft from '../assets/left.svg'
import arrowright from '../assets/right.svg'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';



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
            {/* <Arrow onClick={prevSlide}><img src={arrowleft}/></Arrow>
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
             */}
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

const Arrow = styled.div`
    :nth-child(2){
        img{
            right: 0;
        }
    }
    :nth-child(1){
        img{
            left: 0;
        }
    }
    img{
        position: absolute;
        width: 20px;
        height: auto;
        cursor: pointer;
        top: 50%;
        padding: 10px;
    }
`

export default Carousel
