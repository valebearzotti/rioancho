import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Proyecto from '../components/Proyecto'
import Texto from '../components/Texto'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, Main, ContainerProyectos, ContainerNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido } from '../styles/Home.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import atocha from '../assets/atocha.jpg'
import puerta from '../assets/puerta.png'

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
                <Proyectos>
                    <img src={izq}/>
                    <p>Proyectos</p>
                </Proyectos>
                <Logo val={fixed}>
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
            </Main>
            
        </Container>
    )
}

export default Home
