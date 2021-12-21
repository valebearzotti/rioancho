import React from 'react'
import styled from 'styled-components'

function Proyecto({nombre, fondo}) {
    return (
        <Container>
            <img src={fondo}/>
            <p>{nombre}</p>
        </Container>
    )
}

const Container = styled.div`
    width: 250px;
    height: 400px;
    background-color: transparent;
    transition: .3s all ease-in;
    display: flex;
    cursor: pointer;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: opacity .3s ease-in-out;
    }
    p{
        position: absolute;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        width: 100%;
        top: 40%;
        text-align: center;
        text-transform: uppercase;
    }
    &:hover{
        transition: .3s all ease-in;
        background-color: #322758;
        img{
            transition: opacity .3s ease-in-out;
            opacity: 0;
        }
        p{
            opacity: 1;
            transition: opacity .3s ease-in-out;
        }
    }
`

export default Proyecto
