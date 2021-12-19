import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import { Container, GlobalStyle, Navbar, Logo } from '../styles/Home.styled'
import logo from '../assets/logo.png'

function Home() {

    return (
        <Container>
            <GlobalStyle />
            <Hero />
            <Navbar>
                <Logo>
                    <img src={logo} />
                </Logo>
            </Navbar>

        </Container>
    )
}

export default Home
