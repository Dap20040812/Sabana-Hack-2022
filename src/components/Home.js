import React from 'react'
import styled from 'styled-components'


function Home() {
  return (
    <Container>
        <Background>
            <img src="https://i.vimeocdn.com/video/846323453-4260b78430e2b75ae755d604dc76857f2a3a25ed158747ec15203dcb54009658-d?mw=1000&mh=563&q=70" />
        </Background>
        <Part1>
            <img src="images/banderas.png"/>
            <Title>Sabana Hack 2022</Title>
            <img src="images/banderas.png"/>
        </Part1>
        <Welcome>La Sabana Hack es un concurso de innovación abierta para resolver retos durante 48 horas con base en tecnología. Es un evento que convoca a cualquier estudiante de pregrado de cualquier profesión, que considere pueda aportar a la solución de una necesidad, un problema o una innovación, utilizando tecnologías de la información.</Welcome>
        <SigUp>Inscribete</SigUp>

    </Container>
  )
}

export default Home

const Container = styled.div`
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;

`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        filter: brightness(30%);
    }
`
const Title = styled.div`
    margin-top: 5vh;
    margin-bottom: 5vh;

    font-size: 8vh;
    
    max-height: 200vh;
    max-width: 100vh;
    overflow: hidden;
    
`
const Welcome = styled.div`
    font-size: 3vh;
    padding: 2vh;
    margin-bottom: 5vh;  
    max-height: 200vh;
    max-width: 100vh;
    overflow: hidden;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
`

const Part1 = styled.div`
    padding: 2vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 10vh;
        height: 6vh;
    }
    
`
const SigUp = styled.a`
    width: 40vh;
    background-color: #19336A;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 3vh;
    cursor: pointer;
    trasition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: url(images/boton.jpg);
        opacity: 0.8;
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249 , 0.8);
    }

    
`
