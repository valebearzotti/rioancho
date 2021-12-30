import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import heroimg from '../assets/work-inpro.jpg'
import herovid from '../assets/atocha-video.mp4'
import arrow from '../assets/arrow.svg'

function Hero() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setShow(true)
        } else {
            document.getElementById('vid').play();
            setShow(false)
        }
    }, [])

    return (
        <Container>
            {/* <img src={heroimg} /> */}
            <video controls={show} muted loop id='vid'>
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
`

export default Hero
