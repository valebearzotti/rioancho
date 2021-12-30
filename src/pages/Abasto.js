import React from 'react'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros } from '../styles/Home.styled'
import { ContenedorCarousel, ContenedorSinDatos, Titulo, Estado, Datos, Ubicacion, Main } from '../styles/Proyecto.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import slideUno from '../assets/abasto1.jpg'
import slideDos from '../assets/abasto2.jpg'
import Carousel from '../components/Carousel'

function Abasto() {
    const slides = [slideUno, slideDos]
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
                <ContenedorSinDatos>
                    <Titulo>
                        <h1>Abasto</h1>
                    </Titulo>
                    <Estado>
                        En proceso
                    </Estado>
                </ContenedorSinDatos>
            </Main>
        </Container>
    )
}

export default Abasto
