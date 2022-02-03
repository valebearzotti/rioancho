import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Proyecto from '../components/Proyecto'
import Texto from '../components/Texto'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros, Imagen, Main, ContainerProyectos, ContainerNosotros, Logos, LogoNosotros, ContainerContacto, Mitad, Contacto, Titulo, Contenido, Redes } from '../styles/Home.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import atocha from '../assets/atocha2.webp'
import abasto from '../assets/abasto2.webp'
import contacto from '../assets/contacto.jpg'
import ig from '../assets/ig.svg'
import izquierda from '../assets/rizzotto.png'
import centro from '../assets/chorostecki.png'
import derecha from '../assets/aev.png'


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
                    <Logos>
                        <LogoNosotros 
                            src={izquierda}
                        />
                        <LogoNosotros 
                            src={centro}
                        />
                        <LogoNosotros 
                            src={derecha}
                        />
                    </Logos>
                </ContainerNosotros>
                <ContainerContacto>
                    <Imagen>
                        <img src={contacto}/>
                    </Imagen>
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
                            +54 9 341 6635989<br></br>
                            +54 341 4470537
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
