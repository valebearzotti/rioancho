import React from 'react'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, ContainerProyectos, ContainerNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido } from '../styles/Home.styled'
import { ContenedorCarousel, Main } from '../styles/Proyecto.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import atocha from '../assets/atocha.jpg'
import deptoA from '../assets/deptoA.jpg'
import deptoA2 from '../assets/deptoA2.jpg'
import Carousel from '../components/Carousel'

function Atocha() {
    const slides = [atocha, deptoA, deptoA2]
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
                <ContenedorCarousel>
                    <Carousel slides={slides}/>
                </ContenedorCarousel>
                
            </Main>
        </Container>
    )
}

export default Atocha
