import styled from "styled-components"
import { createGlobalStyle, keyframes } from "styled-components"
import './styles.css'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
`

export const ContenedorCarousel = styled.div`
    margin-top: 100px;
`

export const ContenedorDatos = styled.div`
    width: 80vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    flex-direction: column;
    color: #322758;
`

export const Titulo = styled.div`
    margin-top: 50px;
    display: flex;
    margin-bottom: 20px;
    h1 {
        font-weight: 800;
        font-size: 22px;
    }
    p {
        margin-left: 50px;
        margin-right: auto;
        font-size: 22px;
        font-weight: 600;
        margin-top: auto;
        margin-bottom: auto;
    }
`

export const Estado = styled.div`
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 4px;
    border-bottom: 1px solid #322758;
    border-top: 1px solid #322758;
`

export const Datos = styled.div`
    p{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 18px;
    }
`

export const Ubicacion = styled.div`
    iframe{
        margin-top: 50px;
        margin-bottom: 50px;
    }
`
