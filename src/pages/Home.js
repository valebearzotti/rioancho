import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Proyecto from '../components/Proyecto'
import Texto from '../components/Texto'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, Main, ContainerProyectos, ContainerNosotros, ContainerContacto } from '../styles/Home.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import atocha from '../assets/atocha.jpg'

function Home() {

    return (
        <Container>
            <GlobalStyle />
            {/* <Hero /> */}
            <Navbar>
                <Proyectos>
                    <img src={izq}/>
                    <p>Proyectos</p>
                </Proyectos>
                <Logo>
                    <img src={logo} />
                </Logo>
                <Nosotros>
                    <p>Nosotros</p>
                    <img src={der}/>
                </Nosotros>
            </Navbar>
            <Main>
                <ContainerProyectos>
                    <Proyecto 
                        nombre={"Atocha"}
                        fondo={atocha}
                    />
                    <Proyecto 
                        nombre={"Parque"}
                        fondo={atocha}
                    />
                </ContainerProyectos>
                <ContainerNosotros>
                    <Texto />
                </ContainerNosotros>
                <ContainerContacto>
                    
                </ContainerContacto>
            </Main>
            
        </Container>
    )
}

export default Home
