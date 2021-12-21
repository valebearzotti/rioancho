import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
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
`

export const Navbar = styled.div`
    display: flex;
    font-size: 22px;
    color: #322758;
    position: fixed;
    width: 100%;
    top: 0;
    padding-top: 20px;
    background-color: #fff;
    z-index: 100;
`

export const Logo = styled.div`
    margin-left: auto;
    margin-right: auto;
    img {
        width: 100%;
        height: auto;
    }
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
`

export const ContainerProyectos = styled.div`
    display: flex;
    margin-top: 100px;
    padding-top: 40px;
    padding-bottom: 40px;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
`

export const ContainerNosotros = styled.div`
    width: 80vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`

export const ContainerContacto = styled.div`
    width: 80vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
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
`

export const Contacto = styled.div`
`

export const Titulo = styled.div`
`

export const Contenido = styled.div`
`