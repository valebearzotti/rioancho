import styled from "styled-components"
import './styles.css'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
    color: #515151;
`

export const ContenedorSinDatos = styled.div`
    width: 80vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    flex-direction: column;
    color: #515151;
`


export const Titulo = styled.div`
    margin-top: 50px;
    display: flex;
    border-bottom: 2px solid #515151;
    h1 {
        font-weight: 800;
        font-size: 34px;
        color: #002171;
    }
    p {
        margin-left: 50px;
        margin-right: auto;
        font-size: 22px;
        font-weight: 600;
        margin-top: 34px;
        margin-bottom: auto;
        color: #002171;
    }
    @media (max-width: 550px){
        flex-direction: column;
        h1{
            margin-bottom: 10px;
        }
        p{
            margin-left: 0px;
            font-size: 16px;
            margin-top: 0px;
            margin-bottom: 20px;
        }
        margin-top: 0;
    }
`

export const Estado = styled.div`
    display: block;
    padding-top: 40px;
    padding-bottom: 10px;
    color: #515151;
    font-weight: bold;
    font-size: 20px;
    @media(max-width: 570px){
        text-align: center;
        margin-bottom: 20px;
    }
`

export const Amenidades = styled.div`
    width: 80vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    flex-direction: column;
    padding-bottom: 50px;
    border-bottom: 2px solid #515151;
    @media(max-width: 768px){
        padding-top: 30px;
    }
`

export const Unidades = styled.div`
    width: 80vw;
    display: ${props => props.visible ? 'flex' : 'none'};
    margin-left: auto;
    margin-right: auto;
    height: auto;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 50px;
`

export const Unidad = styled.div`
    img{
        width: 150px;
        margin-top: 30px;
    }
    transition: .1s all ease-in-out;
    opacity: ${props => props.visible ? '1' : '0.5'};
    cursor: pointer;
    &:hover{
        opacity: 1;
        transition: .1s all ease-in-out;
    }
`

export const DatosUnidad = styled.div`
    p{
        margin: 0;
    }
    h4{
        margin: 0;
        font-weight: 800;
    }
    font-size: 18px;
`

export const UnidadActiva = styled.div`
    opacity: ${props => props.visible ? '1' : '0'};
    display: flex;
    margin-left: auto;
    margin-right: auto;
    img{
        width: 100%;
        height: auto;
        padding-right: 40px;
        transition: .3s all ease-in-out;
        &:hover{
            transform: scale(1.05);
            transition: .3s all ease-in-out;
        }
    }
    @media(max-width: 768px){
        img{
            max-width: 250px;
            padding-right: 0px;
            margin-top: 20px;
        }
        flex-direction: column-reverse;
        margin-bottom: 50px;
    }
`

export const DatosActiva = styled.div`
    p{
        margin: 0;
        text-transform: uppercase;
        font-size: 28px;
        font-weight: 600;
    }
    h4{
        margin: 0;
        font-size: 20px;
        padding-bottom: 5px;
        font-weight: 800;
    }
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    @media(max-width: 768px){
        p{
            font-size: 20px;
        }
        h4{
            font-size: 14px;
        }
    }
`


export const FilaAmenidades = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    :nth-child(1){
        margin-bottom: 20px;
    }
    @media(max-width: 570px){
        flex-direction: column;
    }
`

export const TituloAmenidad = styled.h4`
    font-weight: normal;
    margin-left: 20px;
    margin-right: 40px;
    @media(max-width: 570px){
        margin-left: 0;
        margin-right: 0;
        text-align: center;
    }
`

export const Amenidad = styled.img`
    height: 50px;
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
    }
`
