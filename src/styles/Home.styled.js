import styled from "styled-components"
import { createGlobalStyle, keyframes } from "styled-components"
import './styles.css'

export const Container = styled.div`

`

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: #fff;
        font-family: 'Nunito', sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }
`

export const Navbar = styled.div`
    display: flex;
    font-size: 22px;
    color: #322758;
    position: ${props => props.val ? "fixed" : "absolute"};
    width: 100%;
    top: ${props => props.val ? "0" : ""};
    padding-top: 20px;
    background-color: #fff;
    z-index: 100;
    opacity: ${props => props.val ? "1" : "0"};
    transition: opacity .3s ease-in;
    a {
        text-decoration: none;
        color: #322758;
    }
    @media (max-width: 830px){
        position: fixed;
    }
`

export const Logo = styled.div`
    margin-left: auto;
    margin-right: auto;
    opacity: ${props => props.val ? "1" : "0"};
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 830px){
        img {
            width: 80px;
            height: auto;
        }
    }
    transition: opacity .3s ease-in;
`

export const Proyectos = styled.div`
    margin-right: auto;
    cursor: pointer;
    padding: 1em;
    display: flex;
    p{
        margin-bottom: auto;
        margin-top: auto;
    }
    img {
        margin-right: 1em;
        width: 30px;
        height: auto;
    }
    @media (max-width: 830px){
        padding: .5em;
        p{
            font-size: 14px;
        }
        img {
            margin-right: .5em;
            width: 18px;
        }
    }
`

export const Nosotros = styled.div`
    margin-left: auto;
    cursor: pointer;
    padding: 1em;
    display: flex;
    p{
        margin-bottom: auto;
        margin-top: auto;
    }
    img {
        margin-left: 1em;
        width: 30px;
        height: auto;
    }
    @media (max-width: 830px){
        padding: .5em;
        p{
            font-size: 14px;
        }
        img {
            margin-left: .5em;
            width: 18px;
        }
    }
`

export const ContainerProyectos = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    height: 100vh;
    @media (max-width: 830px){    
        padding-top: 200px;
        flex-direction: column;
    }
`

export const ContainerNosotros = styled.div`
    width: 80vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    @media (max-width: 830px){    
        margin-top: 150px;
        padding-top: 50px;
        margin-bottom: 50px;
    }
    @media (max-width: 410px){
        margin-bottom: 100px;
        padding-bottom: 50px;
    }
`

export const ContainerContacto = styled.div`
    width: 80vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width: 830px){
        flex-direction: column;
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
    border-left: 1px solid #322758;
    border-right: 1px solid #322758;
`

export const Mitad = styled.div`
    width: 50%;
    display: flex;
    img {
        width: 80%;
        height: auto;
    }
    @media (max-width: 830px){
        flex-direction: column;
        width: 100%;
        img{
            width: 100%;
            margin-bottom: 50px;
        }
    }
`

export const Contacto = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 50px;
    &:nth-child(1){
        margin-bottom: 70px;
    }
    &:nth-child(2){
        margin-left: auto;
        margin-right: auto;
    }
    color: #322758;
    @media (max-width: 830px){
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1440px){
        &:nth-child(1){
            margin-bottom: 78px;
        }
    }
`

export const Titulo = styled.div`
    font-size: 12px;
    text-transform: uppercase;
    @media (max-width: 830px){
        font-size: 16px;
    }
    @media (min-width: 1440px){
        font-size: 18px;
    }
`

export const Contenido = styled.div`
    font-size: 18px;
    width: 220px;
    @media (max-width: 830px){
        font-size: 20px;
        width: fit-content;
    }
    @media (max-width: 1024px){
        width: 200px;
        font-size: 16px;
    }
    @media (min-width: 1440px){
        font-size: 24px;
        width: 300px;
    }
`

export const Redes = styled.a`
    display: flex;
    img{
        margin-right: 6px;
        width: 20px;
        height: auto;
    }
    p{
        margin: 0;
    }
    text-decoration: none;
    color: #322758;
`