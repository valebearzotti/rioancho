import React from 'react'
import styled from 'styled-components'
import image from '../assets/042.jpg'
import arrow from '../assets/arrow.svg'

function Hero() {

    return (
        <Container>
            {/* <img src={heroimg} /> 
            <video autoPlay muted loop id='vid'>
                <source src={herovid} type="video/mp4" />
            </video>*/}
            <img src={image} />
            <a href="#proyectos"><img src={arrow} alt=""/></a>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    a img{
        position: absolute;
        left: 48%;
        width: 50px;
        height: auto;
        top: 90%;
        cursor: pointer;
    }
    @media (max-width: 1300px){
        a img{
            object-position: 15% 100%;
        }
    }
    @media (max-width: 768px){
        img{
            height: auto;
        }
        a img{
            top: 80%;
            left: 47%;
            width: 30px;
        }
    }
`

export default Hero
