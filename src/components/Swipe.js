import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';
import "swiper/css";
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
  
// install Swiper modules
SwiperCore.use([Navigation]);

function Swipe({slides}) {
    return (
        <Container>
            <Swiper 
                navigation={true} 
                centerInsufficientSlides={true}
                centeredSlides={true}
                loop={true}
                className="mySwiper">
            {slides.map((image, index) => (
                    <SwiperSlide><img className="img" src={image}/></SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

const Container = styled.div`
    .mySwiper {
        width: 100%;
        height: 700px;
    }
    @media (max-width: 1440px){
        .mySwiper {
            height: 600px;
        }
    }
    @media (max-width: 1024px){
        .mySwiper {
            height: 500px;
        }
    }
    @media (max-width: 932px){
        .mySwiper {
            height: 400px;
        }
    }
    @media (max-width: 768px){
        .mySwiper {
            height: 350px;
        }
    }
    @media (max-width: 650px){
        .mySwiper {
            height: 300px;
        }
    }
    @media (max-width: 560px){
        .mySwiper {
            height: 200px;
        }
    }
    .swiper-button-prev, .swiper-button-next{
        color: #322758;
    }
    .img {
        width: fit-content;
        height: 100%;
        object-fit: cover;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`

export default Swipe
