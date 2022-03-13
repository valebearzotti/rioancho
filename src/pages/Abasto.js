import React, { useState, useEffect } from 'react'
import { Container, GlobalStyle, Navbar, Logo, Proyectos, Nosotros } from '../styles/Home.styled'
import { ContenedorCarousel, ContenedorDatos, Titulo, Estado, Datos, Ubicacion, Main, Amenidades, Amenidad, FilaAmenidades, TituloAmenidad, Unidades, Unidad, UnidadActiva, DatosUnidad, DatosActiva } from '../styles/Proyecto.styled'
import logo from '../assets/logo.png'
import izq from '../assets/proyectos.svg'
import der from '../assets/nosotros.svg'
import slideUno from '../assets/slide1.webp'
import slideDos from '../assets/slide2.webp'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import amenidadUno from '../assets/resources/quincho.svg'
import amenidadDos from '../assets/resources/solarium.svg'
import amenidadTres from '../assets/resources/cocheras.svg'
import amenidadCuatro from '../assets/resources/bicicletero.svg'
import unidadA from '../assets/resources/unidadA.svg'
import unidadB from '../assets/resources/unidadB.svg'
import unidadC from '../assets/resources/unidadC.svg'
import unidadD from '../assets/resources/unidadD.svg'
import unidadApng from '../assets/resources/unidadA.png'
import unidadBpng from '../assets/resources/unidadB.png'
import unidadCpng from '../assets/resources/unidadC.png'
import unidadDpng from '../assets/resources/unidadD.png'


function Abasto() {
    const slides = [slideUno, slideDos]

    const [windowVisibility, setWindowVisibility] = useState(true)

    const [unidades, setUnidades] = useState([
        {
            id: 1,
            imagen: unidadA,
            png: unidadApng,
            titulo: "Unidad A",
            dormitorios: "2 dormitorios",
            piso: "1º a 6º piso",
            metros: "61 m² exclusivos",
            value: false
        },
        {
            id: 2,
            imagen: unidadB,
            png: unidadBpng,
            titulo: "Unidad B",
            dormitorios: "1 dormitorio",
            piso: "1º a 6º piso",
            metros: "47 m² exclusivos",
            value: false
        },
        {
            id: 3,
            imagen: unidadC,
            png: unidadCpng,
            titulo: "Unidad C",
            dormitorios: "Loft",
            piso: "1º a 6º piso",
            metros: "30 m² exclusivos",
            value: false
        },
        {
            id: 4,
            imagen: unidadD,
            png: unidadDpng,
            titulo: "Unidad D",
            dormitorios: "1 dormitorio",
            piso: "1º a 6º piso",
            metros: "43 m² exclusivos",
            value: false
        },
    ]);

    const toggle = (u) => {  //le paso el que seleccione
        setUnidades((vals) =>  //en el arreglo asigno, al que se corresponde con el id, el valor opuesto al que tenia.
          vals.map((v) => (v.id === u.id ? { ...v, value: !v.value } : (((v.id !== u.id) && v.value) ? {...v, value: false} : v)) //tambien, si algun otro cuyo id != c.id y c.value = true le asigno false.
        ));
    };

    useEffect(() => {
      if(window.innerWidth<900){
        setUnidades((vals) =>  //en el arreglo asigno, al que se corresponde con el id, el valor opuesto al que tenia.
          vals.map((v) => ({ ...v, value: true })) //tambien, si algun otro cuyo id != c.id y c.value = true le asigno false.
        );
        setWindowVisibility(false)
      } else {
          setWindowVisibility(true)
      }
    }, [])
    

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
                    <a href="./#"><img src={logo} /></a>
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
                        <h1>Atocha Abasto</h1>
                        <p>Pasco 1576/78, Rosario</p>
                    </Titulo>
                    <Datos>
                        <p>Atocha Abasto es un edificio de 6 pisos ubicado en el corazón del Abasto, barrio en constante crecimiento,
                        lleno de vida de día y noche por la gran cantidad de universidades y colegios en la zona.</p>
                        <p>Se encuentra a metros de <strong>Av. Pellegrini</strong>, muy favorecida por la gran oferta gastronómica y nuevos mercados
                        que buscan la zona afianzada históricamente como corredor gastronómico de la Ciudad.</p>
                        <p>El edificio cuenta con una <strong>planta muy variada</strong> ofreciendo unidades de <strong>dos dormitorios, un dormitorio y Loft</strong>. 
                        Siempre se busca priorizar la iluminación y la ventilación con amplios balcones en todas las unidades.
                        Detalles de <strong>diseño</strong> y terminaciones exclusivas se combinan para terminar de darle forma al emprendimiento
                        con <strong>espacios verdes sustentables.</strong></p>
                        <p>Entre sus amenidades se destacan el quincho con parrillero y solarium en la terraza, cocheras y bicicleteros.</p>
                    </Datos>
                    <Estado>
                        Amenidades
                    </Estado>
                    <Amenidades>
                        <FilaAmenidades>
                            <Amenidad src={amenidadUno}/>
                            <TituloAmenidad>Quincho</TituloAmenidad>
                            <Amenidad src={amenidadDos}/>
                            <TituloAmenidad>Solarium</TituloAmenidad>
                        </FilaAmenidades>
                        <FilaAmenidades>
                            <Amenidad src={amenidadTres}/>
                            <TituloAmenidad>Cocheras</TituloAmenidad>
                            <Amenidad src={amenidadCuatro}/>
                            <TituloAmenidad>Bicicleteros</TituloAmenidad>
                        </FilaAmenidades>
                    </Amenidades>
                    <Estado>
                        Unidades
                    </Estado>
                    <Unidades visible={windowVisibility}>
                        {unidades.map((unidad)=> {
                            return(
                                <Unidad onClick={() => toggle(unidad)} visible={unidad.value}>
                                    <DatosUnidad>
                                        <h4>{unidad.titulo}</h4>
                                        <p>{unidad.dormitorios}</p>
                                        <p>{unidad.piso}</p>
                                    </DatosUnidad>
                                    <img src={unidad.imagen}/>
                                </Unidad>
                            )
                        })}
                    </Unidades>
                    {unidades.map((unidad)=>{
                        if (unidad.value){
                            return(
                                <UnidadActiva visible={unidad.value}>
                                    <img src={unidad.png}/>
                                    <DatosActiva>
                                        <h4>{unidad.titulo}</h4>
                                        <p>{unidad.dormitorios}</p>
                                        <p>{unidad.metros}</p>
                                    </DatosActiva>
                                </UnidadActiva>
                            )
                        }
                    })}
                    <Estado>
                        Ubicación
                    </Estado>
                    <Ubicacion>
                        <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Pasco%201578,%20Rosario,%20Argentina+(AtochaAbasto)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </Ubicacion>
                    <Footer />
                </ContenedorDatos>
            </Main>
        </Container>
    )
}



export default Abasto
