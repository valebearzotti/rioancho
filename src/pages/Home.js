import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Proyecto from '../components/Proyecto'
import Texto from '../components/Texto'
import Footer from '../components/Footer'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, Imagen, Main, ContainerProyectos, ContainerNosotros, Logos, LogoNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido, Redes } from '../styles/Home.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import atocha from '../assets/atocha2.webp'
import abasto from '../assets/abastof.webp'
import contacto from '../assets/contacto.jpg'



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
                        nombre={"Atocha Abasto"}
                        fondo={abasto}
                        link={"/abasto"}
                    />
                    <Proyecto 
                        nombre={"Atocha"}
                        fondo={atocha}
                        link={"/atocha"}
                    />
                </ContainerProyectos>
                <ContainerNosotros id="nosotros">
                    <Texto />
                </ContainerNosotros>
                <ContainerContacto>
                    <Imagen>
                        <img src={contacto}/>
                    </Imagen>
                </ContainerContacto>
            </Main>
            <Footer />
        </Container>
    )
}

export default Home
