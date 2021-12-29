import React, {useState} from 'react'
import styled from 'styled-components'
import Flickity from "react-flickity-component";
import '../styles/styles.css'

function Carousel({slides}) {

    return (
        <Container>
             <Flickity>
                <img src={slides[0]} />
             </Flickity>
        </Container>
    )
}

const Container = styled.div`
`

const SlideImage = styled.img`
    width: auto;
    height: 100%;
    display: flex;
    margin-right: auto;
    margin-left: auto;
`

export default Carousel
