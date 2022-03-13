import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import rioancho from '../assets/resources/rioancho.svg'
import rizzotto from '../assets/rizzotto.png'
import chorostecki from '../assets/chorostecki.png'
import aev from '../assets/aev.png'

function Footer() {
  return (
    <Container>
        <Grid>
            <Element>
                <img src={rioancho}></img>
            </Element>
            <Element>
                <Contenido>
                    Sarmiento 819 | 3er Piso Oficina 5/9 Rosario | ARG
                </Contenido>
            </Element>
            <Element>
                <Contenido>
                    contacto@rioancho.com.ar
                </Contenido>
                <Contenido>
                    (+54 341) 4470537 | (+54 9 341) 6635989
                </Contenido>
            </Element>
            <Element>
                <img src={rizzotto}></img>
                <img src={chorostecki}></img>
                <img src={aev}></img>
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
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media(max-width: 1200px){
        width: 100%;
        flex-direction: column;
    }
`

const Element = styled.div`
    flex-basis: 20%;
    padding: 40px 50px;
    :nth-child(1){
        margin-top: auto;
        margin-bottom: auto;
        img{
            height: 66px;
            width: auto;
            float: right;
        }
    }
    :nth-child(2){
        flex-basis: 33%;
        border-left: 1px solid #515151;
        margin-top: auto;

    }
    :nth-child(3){
        flex-basis: 33%;
        border-right: 1px solid #515151;
        margin-top: auto;
        
    }
    :nth-child(4){
        flex-basis: 14%;
        display: flex;
        flex-direction: column;
        padding: 0px 50px;
        margin-top: auto;
        margin-bottom: auto;
        img{
            height: auto;
            width: 80px;
            float: left;
            :nth-child(1){
                margin-top: 20px;
                margin-bottom: 0px;
            }
            :nth-child(2), :nth-child(3){
                width: 60px;
                margin-top: 20px;
            }
        }
    }
    @media(max-width: 1400px){
        :nth-child(2){
            padding-right: 10px;
            padding-left: 40px;
        }
        :nth-child(3){
            padding-right: 0px;
            padding-left: 10px;
        }
    }
    @media(max-width: 1300px){
        padding: 20px 20px;
    }
    @media(max-width: 1200px){
        :nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4){
            margin: auto;
        }
        :nth-child(2){
            border-left: 0px solid #515151;
            border-top: 1px solid #515151;
            margin-left: auto;
            width: 400px;
            text-align: center;
            padding-right: 10px;
            padding-left: 10px;
        }
        :nth-child(3){
            border-right: 0px solid #515151;
            border-bottom: 1px solid #515151;
            width: 400px;
            text-align: center;
            padding-left: 0px;
            padding-right: 10px;
        }
        :nth-child(4){
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            padding: 0px;
            img{
                :nth-child(1), :nth-child(2){
                    margin-bottom: 30px;
                }
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
    @media(max-width: 430px){
        :nth-child(2), :nth-child(3){
            width: 100%;
            font-size: 14px;
        }
        :nth-child(1){
            img{
                height: 44px;
            }
        }
    }

`

const Titulo = styled.div`
    text-transform: uppercase;
`

const Contenido = styled.div`
    margin-left: auto;
    img{
        height: 16px;
    }
    font-weight: bold;
`


export default Footer