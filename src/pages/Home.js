import React from 'react'
import Hero from '../components/Hero'
import { Container, GlobalStyle } from '../styles/Home.styled'

function Home() {
    return (
        <Container>
            <GlobalStyle />
            <Hero />
        </Container>
    )
}

export default Home
