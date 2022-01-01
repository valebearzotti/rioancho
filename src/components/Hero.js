import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import heroimg from '../assets/work-inpro.jpg'
import herovid from '../assets/atocha-video.mp4'
import arrow from '../assets/arrow.svg'

function Hero() {

    useEffect(() => {
        document.getElementById('vid').play();
    }, [])

    return (
        <Container>
            {/* <img src={heroimg} /> */}
            <video autoPlay muted loop id='vid'>
                <source src={herovid} type="video/mp4" />
            </video>
            <a href="#proyectos"><img src={arrow} /></a>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    img{
        position: absolute;
        left: 48%;
        width: 50px;
        height: auto;
        top: 90%;
        cursor: pointer;
    }
    @media (max-width: 1300px){
        img{
            object-position: 15% 100%;
        }
    }
    @media (max-width: 768px){
        video{
            height: auto;
        }
        img{
            top: 80%;
            left: 47%;
            width: 30px;
        }
    }
`

export default Hero
