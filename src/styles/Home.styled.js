import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const Container = styled.div`

`

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: #fff;
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