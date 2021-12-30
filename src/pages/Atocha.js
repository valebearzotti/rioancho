import React from 'react'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros } from '../styles/Home.styled'
import { ContenedorCarousel, ContenedorDatos, Titulo, Estado, Datos, Ubicacion, Main } from '../styles/Proyecto.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import slideUno from '../assets/atocha1.jpg'
import slideDos from '../assets/atocha2.jpg'
import slideTres from '../assets/atocha3.jpg'
import slideCuatro from '../assets/atocha4.jpg'
import Carousel from '../components/Carousel'

function Atocha() {
    const slides = [slideUno, slideDos, slideTres, slideCuatro]
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
                <ContenedorDatos>
                    <Titulo>
                        <h1>Atocha</h1>
                        <p>
                            Tucuman 3319, Centro, Rosario
                        </p>
                    </Titulo>
                    <Estado>
                        Finalizado
                    </Estado>
                    <Datos>
                        <p>Emplazado sobre calle Tucumán casi esquina Crespo, el Edificio Atocha se ubica en una zona residencial en
                        completo crecimiento de la ciudad de Rosario. El barrio se potencia con el desarrollo del nuevo Mercado del
                        Patio, la apertura de las calles adyacentes hacia zona norte con salida directa al Parque Scalabrini Ortiz en
                        conexión con Puerto Norte y el shopping Alto Rosario.</p>
                        <p>La vida recreativa y nocturna está renaciendo con el nuevo eje gastronómico en Av. Francia y la apertura
                        de numerosos locales en Pichincha.</p>
                    </Datos>
                    <Estado>
                        Ubicacion
                    </Estado>
                    <Ubicacion>
                    <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Tucuman%203319,%20Rosario,%20Argentina+(Atocha)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </Ubicacion>
                </ContenedorDatos>
            </Main>
        </Container>
    )
}

export default Atocha
