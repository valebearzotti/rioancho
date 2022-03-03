import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import rioancho from '../assets/resources/rioancho.svg'
import rizzotto from '../assets/resources/rizzotto.svg'
import chorostecki from '../assets/resources/chorostecki.svg'

function Footer() {
  return (
    <Container>
        <Grid>
            <Element>
                <img src={rioancho}></img>
            </Element>
            <Element>
                <Titulo>
                    Dirección
                </Titulo>
                <Contenido>
                    Sarmiento 819 Piso 3 Oficina 5 Rosario, Argentina.
                </Contenido>
            </Element>
            <Element>
                <Titulo>
                    Contacto
                </Titulo>
                <Contenido>
                    +54 9 341 6635989
                </Contenido>
                <Contenido>
                    +54 341 4470537
                </Contenido>
            </Element>
            <Element>
                <img src={rizzotto}></img>
                <img src={chorostecki}></img>
            </Element>
        </Grid>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    @media(max-width: 768px){
        margin-bottom: 50px;
    }
`

const Grid = styled.div`
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`

const Element = styled.div`
    flex-basis: 25%;
    padding: 20px 50px;
    :nth-child(1){
        img{
            height: 66px;
            width: auto;
            float: right;
        }
    }
    :nth-child(2){
        border-left: 1px solid #515151;
        border-right: 1px solid #515151;
    }
    :nth-child(3){
        border-right: 1px solid #515151;
    }
    :nth-child(4){
        padding: 0px 50px;
        img{
            height: 40px;
            width: auto;
            float: left;
            :nth-child(1){
                margin-bottom: 20px;
            }
        }
    }
    
`

const Titulo = styled.div`
    text-transform: uppercase;
`

const Contenido = styled.div`
`


export default Footer