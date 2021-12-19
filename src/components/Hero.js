import React, {useEffect} from 'react'
import styled from 'styled-components'
import heroimg from '../assets/work-inpro.jpg'
import herovid from '../assets/herovid.mp4'

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
        </Container>
    )
}

const Container = styled.div`
    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    @media (max-width: 1300px){
        img{
            object-position: 15% 100%;
        }
    }
`

export default Hero
