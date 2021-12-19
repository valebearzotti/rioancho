import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros } from '../styles/Home.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'

function Home() {

    return (
        <Container>
            <GlobalStyle />
            {/* <Hero /> */}
            <Navbar>
                <Proyectos>
                    <img src={izq}/>
                    Proyectos
                </Proyectos>
                <Logo>
                    <img src={logo} />
                </Logo>
                <Nosotros>
                    Nosotros
                    <img src={der}/>
                </Nosotros>
            </Navbar>

        </Container>
    )
}

export default Home
