import React from 'react'
import styled from 'styled-components'

function Texto() {
    return (
        <Container>
            <Parrafo border={true}>
                Nuestro propósito principal es promover y respaldar inversiones confiables en el
                sector inmobiliario y la construcción.
                Nuestro servicio cuenta con medios propios de gestión, recursos humanos y capital.
                Cada desarrollo inmobiliario que proponemos es concebido integralmente,
                partiendo desde la búsqueda y adquisición de terrenos que agreguen valor a la
                inversión, como ser su ubicación, urbanismo y posibilidades de desarrollo a futuro.
            </Parrafo>
            <Parrafo border={false}>
                Proyectamos con una impronta arquitectónica fuerte, con acento en el diseño,
                la calidad, la funcionalidad, confort y valor de inversión para los futuros dueños de
                las experiencias que proponemos.
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
    border-bottom: ${props => props.border ? '1px' : '0px'} solid #322758;
    padding-bottom: 20px;
    @media (max-width: 830px){
        font-size: 20px;
    }
    @media (max-width: 350px){
        font-size: 18px;
    }
`

export default Texto
