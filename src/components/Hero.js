import React, {useEffect} from 'react'
import styled from 'styled-components'
import heroimg from '../assets/work-inpro.jpg'
import herovid from '../assets/herovid.mp4'
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
            <img src={arrow} />
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
    }
    @media (max-width: 1300px){
        img{
            object-position: 15% 100%;
        }
    }
`

export default Hero
