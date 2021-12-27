import React from 'react'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, Main, ContainerProyectos, ContainerNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido } from '../styles/Home.styled'
import { Carousel } from '../styles/Proyecto.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'

function Atocha() {
    return (
        <Container>
            <GlobalStyle />
            <Navbar val={true}>
                <a href="./#proyectos">
                    <Proyectos>
                        <img src={izq}/>
                        <p>Proyectos</p>
                    </Proyectos>
                </a>
                <Logo val={true}>
                    <img src={logo} />
                </Logo>
                <a href="./#nosotros">
                    <Nosotros>
                        <p>Nosotros</p>
                        <img src={der}/>
                    </Nosotros>
                </a>
            </Navbar>
            <Main>
                <Carousel>

                </Carousel>
            </Main>
        </Container>
    )
}

export default Atocha
