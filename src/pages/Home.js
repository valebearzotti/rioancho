import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Proyecto from '../components/Proyecto'
import Texto from '../components/Texto'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, Main, ContainerProyectos, ContainerNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido, Redes } from '../styles/Home.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import atocha from '../assets/atocha1.webp'
import abasto from '../assets/abasto1.webp'
import puerta from '../assets/puerta.png'
import ig from '../assets/ig.svg'

function Home() {

    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            if (window.innerWidth < 769){
                setFixed(true)
            } else {
                if (window.innerHeight < window.scrollY) {
                    setFixed(true)
                } else {
                    setFixed(false)
                }
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
                    <a href="/#"><img src={logo} /></a>
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
                        nombre={"Atocha Abasto"}
                        fondo={abasto}
                        link={"/abasto"}
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
                            +54 341 6635989 
                            <Redes href="mailto:contacto@rioancho.com.ar">contacto@rioancho.com.ar</Redes>
                            <Redes href="https://www.instagram.com/rio.ancho/" target="_blank">
                                <img src={ig}/><p>/rio.ancho</p>
                            </Redes>
                            </Contenido>
                        </Contacto>
                    </Mitad>
                </ContainerContacto>
            </Main>
            
        </Container>
    )
}

export default Home
