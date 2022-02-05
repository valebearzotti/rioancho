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
    width: 100%;
    height: auto;
    background-color: transparent;
    transition: .3s all ease-in;
    display: flex;
    cursor: pointer;
    position: relative;
    margin-top: auto;
    img{
        width: 100%;
        height: 100%;
        opacity: 1;
        object-fit: contain;
        transition: opacity .3s ease-in-out;
    }
    p{
        position: absolute;
        color: #fff;
        font-size: 30px;
        font-weight: 600;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        width: 100%;
        top: 40%;
        text-align: center;
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
    @media (max-width: 1366px){
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: 960px){
        width: 600px;
    }
    @media (max-width: 830px){
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: 768px){
        width: 100%;
    }
    @media (min-width: 1440px){
        //width: 350px;
        //height: 600px;
    }
`

export default Proyecto
