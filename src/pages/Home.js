import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Proyecto from '../components/Proyecto'
import Texto from '../components/Texto'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, Main, ContainerProyectos, ContainerNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido, Redes } from '../styles/Home.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import atocha from '../assets/atocha1.jpeg'
import abasto from '../assets/abasto.jpg'
import puerta from '../assets/puerta.png'
import ig from '../assets/ig.svg'

function Home() {

    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            if (window.innerHeight < window.scrollY) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        }
    })

    return (
        <Container>
            <GlobalStyle />
            <Hero />
            <Navbar val={fixed}>
                <a href="#proyectos">
                    <Proyectos>
                        <img src={izq}/>
                        <p>Proyectos</p>
                    </Proyectos>
                </a>
                <Logo val={fixed}>
                    <img src={logo} />
                </Logo>
                <a href="#nosotros">
                    <Nosotros>
                        <p>Nosotros</p>
                        <img src={der}/>
                    </Nosotros>
                </a>
            </Navbar>
            <Main>
                <ContainerProyectos id="proyectos">
                    <Proyecto 
                        nombre={"Atocha"}
                        fondo={atocha}
                        link={"/atocha"}
                    />
                    <Proyecto 
                        nombre={"Abasto"}
                        fondo={abasto}
                        link={"./#proyectos"}
                    />
                </ContainerProyectos>
                <ContainerNosotros id="nosotros">
                    <Texto />
                </ContainerNosotros>
                <ContainerContacto>
                    <Mitad>
                        <img src={puerta}/>
                    </Mitad>
                    <Mitad>
                        <Contacto>
                            <Titulo>
                                Dirección
                            </Titulo>
                            <Contenido>
                            Sarmiento 819 Piso 3 Of 5 - Rosario, Argentina.
                            </Contenido>
                        </Contacto>
                        <Contacto>
                            <Titulo>
                                Contacto
                            </Titulo>
                            <Contenido>
                            +54 341 6635989 contacto@rioancho.com.ar
                            </Contenido>
                        </Contacto>
                    </Mitad>
                </ContainerContacto>
                <Redes href="https://www.instagram.com/rio.ancho/" target="_blank">
                    <img src={ig}/><p>/rio.ancho</p>
                </Redes>
            </Main>
            
        </Container>
    )
}

export default Home
