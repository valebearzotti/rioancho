import React from 'react'
import styled from 'styled-components'

function Texto() {
    return (
        <Container>
            <Titulo>Le damos valor a tu <Bold>inversión</Bold></Titulo>
            <Parrafo>
                Somos una desarrolladora situada en <Bold>Rosario</Bold> que cuenta con el aval de <Bold>RIZZOTTO CONSTRUCCIONES</Bold>,
                con una larga trayectoria e innumerables obras construidas, y <Bold>CHP ARQUITECTOS</Bold> aportando
                nuevos diseños y tecnologías.
            </Parrafo>
            <Parrafo>
                El propósito principal de nuestra fusión es <Bold>promover y respaldar inversiones</Bold> confiables en el
                sector inmobiliario y la construcción, mediante el desarrollo integral de <Bold>proyectos residenciales.</Bold>
            </Parrafo>
            <Parrafo>
                Nuestro servicio cuenta con <Bold>medios propios de gestión, recursos humanos y capital.</Bold>
            </Parrafo>
            <Parrafo>
                Cada desarrollo inmobiliario es concebido integralmente,
                partiendo desde la búsqueda y adquisición de terrenos que agreguen valor a la
                inversión, como ser su <Bold>ubicación, urbanismo y posibilidades de desarrollo a futuro.</Bold>
            </Parrafo>
        </Container>
    )
}

const Container = styled.div`
    margin-top: auto;
    margin-bottom: auto;
`

const Parrafo = styled.p`
    font-size: 22px;
    color: #322758;
    font-weight: 500;
    padding-bottom: 20px;
    @media (max-width: 830px){
        font-size: 16px;
    }
    @media (max-width: 350px){
        font-size: 14px;
    }
    @media (min-width: 1440px){
        font-size: 26px;
    }
`

const Titulo = styled.h1`
    text-align: center;
    font-weight: 600;
    color: #322758;
    font-size: 42px;
    @media (max-width: 830px){
        font-size: 24px;
        padding-top: 50px;
    }
    @media (max-width: 450px){
        font-size: 20px;
        padding-top: 20px;
    }
`

const Bold = styled.span`
    font-weight: 800;
`

export default Texto
