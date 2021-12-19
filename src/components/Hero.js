import React from 'react'
import styled from 'styled-components'
import heroimg from '../assets/work-inpro.jpg'

function Hero() {
    return (
        <Container>
            <img src={heroimg} />
        </Container>
    )
}

const Container = styled.div`
    img {
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
