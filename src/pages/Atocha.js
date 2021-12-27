import React from 'react'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, ContainerProyectos, ContainerNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido } from '../styles/Home.styled'
import { ContenedorCarousel, Main } from '../styles/Proyecto.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import atocha from '../assets/atocha.jpg'
import deptoA from '../assets/deptoA.jpg'
import deptoA2 from '../assets/deptoA2.jpg'

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
                <ContenedorCarousel>
                    <Carousel className="tall">
                        <div>
                            <img src={deptoA} />
                        </div>
                        <div>
                            <img src={deptoA2} />
                        </div>
                    </Carousel>
                </ContenedorCarousel>
                
            </Main>
        </Container>
    )
}

export default Atocha
