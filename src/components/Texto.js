import React from 'react'
import styled from 'styled-components'

function Texto() {
    return (
        <Container>
            <Titulo>Le damos valor a tu <Bold>inversión</Bold></Titulo>
            <Parrafo>
                Nuestra desarrolladora cuenta con el aval de RIZZOTTO CONSTRUCCIONES,
                empresa de vasta trayectoria, y CHP ARQUITECTOS, referentes del
                diseño y la tecnología.
            </Parrafo>
            <Parrafo>
                Nuestro objetivo es promover y respaldar inversiones confiables en el
                sector inmobiliario y la construcción a través del desarrollo de proyectos residenciales.
            </Parrafo>
            <Parrafo>
                Cada proyecto es concebido integralmente:
                desde la búsqueda y adquisición de terrenos que agreguen valor a la
                inversión, su ubicación y urbanismo, hasta sus posibilidades de desarrollo a futuro.
            </Parrafo>
            <Parrafo>
                Contamos con medios propios de gestión, recursos humanos y capital.
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
    color: #515151;
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
    margin-bottom: 50px;
    font-weight: 600;
    color: #515151;
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
