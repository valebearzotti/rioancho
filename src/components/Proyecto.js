import React from 'react'
import styled from 'styled-components'

function Proyecto({nombre, fondo, link}) {
    return (
        <Container>
            <a href={link}>
                <img src={fondo}/>
                <p>{nombre}</p>
            </a>
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
    margin-top: auto;
    margin-bottom: auto;
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
    @media (max-width: 830px){
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }
    @media (min-width: 1440px){
        width: 350px;
        height: 600px;
    }
`

export default Proyecto
