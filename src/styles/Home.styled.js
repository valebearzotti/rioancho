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
    img {
        margin-right: 1em;
        width: 50px;
        height: auto;
    }
`

export const Nosotros = styled.div`
    margin-left: auto;
    cursor: pointer;
    padding: 1em;
    img {
        margin-left: 1em;
        width: 50px;
        height: auto;
    }
`